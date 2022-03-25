//可以理解为把 foo函数 放到 obj对象 中执行了一下，所以能调用到obj里的代码
Function.prototype.myCall = function(thisArg = window) {
    // thisArg.fn 指向当前函数 foo (foo.myCall)  this就是foo  this()就是foo()
    thisArg.fn = this;
    // 第一个参数为 this，所以要取剩下的参数
    const args = [...arguments].slice(1); 
    // 执行函数 （相当于执行foo）  并且如果foo中如果有返回值，就把返回值返回
    const result = thisArg.fn(...args);
    console.log(result);
    // thisArg上并不存在fn，所以需要移除
    delete thisArg.fn;
    return result;
}

function foo() {
    console.log(this.name);
    return arguments
}
const obj = {
    name: 'litterStar'
}
const bar = function() {
    foo.myCall(obj,1);
    //foo方法的this值会绑定到obj对象
}
bar();
// litterStar