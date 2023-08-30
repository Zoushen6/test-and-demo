import { track, trigger } from './effect.js';
const isObject = (target) => target != null && typeof target == 'object';
// @ts-ignore
export const reactive = (target) => {
    return new Proxy(target, {
        get(target, key, receiver) {
            const res = Reflect.get(target, key, receiver);
            track(target, key);
            //递归多层嵌套对象
            if (isObject(res)) {
                return reactive(res);
            }
            return res;
        },
        set(target, key, value, receiver) {
            const res = Reflect.set(target, key, value, receiver);
            trigger(target, key);
            return res;
        }
    });
};
