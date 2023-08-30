function defineReactive(obj, key, val) {
    let dep = new Dep()
  
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function() {
        if (Dep.target) {
          dep.depend()
        }
        console.log('get ' + key + ': ' + val)
        return val
      },
      set: function(newVal) {
        if (newVal !== val) {
          val = newVal
          dep.notify()
        }
        console.log('set ' + key + ': ' + newVal)
      }
    })
  }
  
  function observe(obj) {
    if (!obj || typeof obj !== 'object') {
      return
    }
  
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key])
    })
  }
  
  // 类 Dep 负责管理一个属性的所有依赖关系
  class Dep {
    constructor() {
      this.subs = []
    }
  
    // 方法用于添加一个订阅者
    addSub(sub) {
      this.subs.push(sub)
    }
  
    depend() {
      if (Dep.target) {
        Dep.target.addDep(this)
      }
    }
  
    // 方法用于通知所有订阅者属性的值已经发生变化
    notify() {
      this.subs.forEach(sub => sub.update())
    }
  }
  
  Dep.target = null
  
  class Watcher {
    constructor(vm, expOrFn, cb) {
      this.vm = vm
      this.expOrFn = expOrFn
      this.cb = cb
      this.deps = []
      this.depIds = new Set()
  
      if (typeof expOrFn === 'function') {
        this.getter = expOrFn
      } else {
        this.getter = function() {
          return vm[expOrFn]
        }
      }
  
      this.value = this.get()
    }
  
    get() {
      Dep.target = this
      const value = this.getter.call(this.vm)
      Dep.target = null
      return value
    }
  
    addDep(dep) {
      if (!this.depIds.has(dep.id)) {
        this.depIds.add(dep.id)
        this.deps.push(dep)
        dep.addSub(this)
      }
    }
  
    update() {
      const oldValue = this.value
      this.value = this.get()
      this.cb.call(this.vm, this.value, oldValue)
    }
  }
  
  const obj = {
    firstName: '张',
    lastName: '三',
    age: 18
  }
  
  observe(obj)
  
  new Watcher(obj, function() {
    return this.firstName + this.lastName
  }, function(newVal, oldVal) {
    console.log('计算属性 fullName 发生变化：' + oldVal + ' => ' + newVal)
  })
  
  new Watcher(obj, 'age', function(newVal, oldVal) {
    console.log('侦听器 age 发生变化：' + oldVal + ' => ' + newVal)
  })
  
  console.log(obj.firstName + obj.lastName)
  obj.firstName = '李'
  obj.lastName = '四'
  obj.age = 20