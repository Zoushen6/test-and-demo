function reactive(raw) {
    const observed = new Proxy(raw, {
      get(target, key, receiver) {
        // 收集依赖
        track(target, key)
        console.log("get:" + key);
        return Reflect.get(target, key, receiver)
      },
      set(target, key, value, receiver) {
        const oldValue = target[key]
        const result = Reflect.set(target, key, value, receiver)
        console.log("set:" + key);
        if (result && oldValue !== value) {
          // 触发更新
          trigger(target, key)
        }
        return result
      }
    })
  
    return observed
  }
  // 全局依赖管理器
const targetMap = new WeakMap();

function effect(fn) {
    activeEffect = fn;
    fn();
    activeEffect = null;
  }

function track(target, key) {
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Set();
    depsMap.set(key, dep);
  }
  dep.add(activeEffect);
}


function trigger(target, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) return;
  const dep = depsMap.get(key);
  if (!dep) return;
  dep.forEach((item) => {
    effect(item);
  });
}

// 当前正在计算的计算属性或渲染函数
let activeEffect = null;

  const obj = reactive({a:1})

obj.a = 2
const b = obj.a