let activeEffect: () => void;
const effect = (fn:Function) => {
    const _effect = function () {
        activeEffect = _effect;
        fn()
    }
    _effect()
}

const targetMap = new WeakMap()
const track = (target: object, key: string | symbol) =>{
    let depsMap = targetMap.get(target)
    if(!depsMap){
        depsMap = new Map()
        targetMap.set(target,depsMap)
    }
    let deps = depsMap.get(key)
    if(!deps){
        deps = new Set()
        depsMap.set(key,deps)
    }

    deps.add(activeEffect)
}

const trigger = (target: object, key: string | symbol) => {
    const depsMap = targetMap.get(target)
    const deps = depsMap.get(key)
    deps.forEach((effect: () => any)=>effect())
}

export {
    effect,
    track,
    trigger
}