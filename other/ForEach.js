/**
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
 function forEach(obj, fn) {
    // Don't bother if no value provided
    // 判断 null 和 undefined 直接返回
    if (obj === null || typeof obj === 'undefined') {
      return;
    }
  
    // Force an array if not already something iterable
    // 如果不是对象，放在数组里。
    if (typeof obj !== 'object') {
      /*eslint no-param-reassign:0*/
      obj = [obj];
    }
  
    // 是数组 则用for 循环，调用 fn 函数。参数类似 Array.prototype.forEach 的前三个参数。
    if (isArray(obj)) {
      // Iterate over array values
      for (var i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      // Iterate over object keys
      // 用 for in 遍历对象，但 for in 会遍历原型链上可遍历的属性。
      // 所以用 hasOwnProperty 来过滤自身属性了。
      // 其实也可以用Object.keys来遍历，它不遍历原型链上可遍历的属性。
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }

  function isArray(val) {
    return toString.call(val) === '[object Array]';
  }

  let obj = {
    a: 1,
    b: 2,
    fun: function(a,b) {
        return this.a+this.b
    }
  }

  let obj1 = {
    c: 4,
    d: 5,
  }


  function extend(obj1,obj) {
    forEach(obj,(item,key,obj) => {
        obj1[key] = item
    })
    return obj1
  } 
console.log(extend(obj1,obj).fun());