let activeEffect;
const effect = (fn, options) => {
    const _effect = function () {
        activeEffect = _effect;
        let res = fn();
        //computed
        return res;
    };
    _effect.options = options;
    _effect();
    return _effect;
};
const targetMap = new WeakMap();
const track = (target, key) => {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
        depsMap = new Map();
        targetMap.set(target, depsMap);
    }
    let deps = depsMap.get(key);
    if (!deps) {
        deps = new Set();
        depsMap.set(key, deps);
    }
    deps.add(activeEffect);
};
const trigger = (target, key) => {
    const depsMap = targetMap.get(target);
    const deps = depsMap.get(key);
    deps.forEach((effect) => {
        var _a, _b, _c;
        if ((_a = effect === null || effect === void 0 ? void 0 : effect.options) === null || _a === void 0 ? void 0 : _a.scheduler) {
            (_c = (_b = effect === null || effect === void 0 ? void 0 : effect.options) === null || _b === void 0 ? void 0 : _b.scheduler) === null || _c === void 0 ? void 0 : _c.call(_b);
        }
        else {
            effect();
        }
    });
};
export { effect, track, trigger };
