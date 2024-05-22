/**
     * Reflect
    若需要在Proxy内部调用对象的默认行为，建议使用Reflect，其是ES6中操作对象而提供的新 API

    基本特点：

    只要Proxy对象具有的代理方法，Reflect对象全部具有，以静态方法的形式存在
    修改某些Object方法的返回结果，让其变得更合理（定义不存在属性行为的时候不报错而是返回false）
    让Object操作都变成函数行为
 */
var person = {
    name: "张三"
};

var proxy = new Proxy(person, {
    get(target, propKey) {
        console.log('get');
    return Reflect.get(target,propKey)
    }
});

console.log(proxy.name,proxy);  // "张三"



//对数组进行代理
var person = ['asdasdas',123,546]
var proxy = new Proxy(person, {
    get(target, propKey) {
        console.log('getKey:' + propKey);
        return Reflect.get(target,propKey)
    },
    set(target, propKey, value,proxy) {
        console.log('setKey:' + propKey);
        return Reflect.set(target, propKey, value,proxy)
    }
});
proxy.pop()
console.log(proxy);

//output
// getKey:pop  读取pop属性
// getKey:length   读取length属性
// getKey:2   读取pop的元素下标 并返回
// setKey:length    设置数组length为2 即删除最后一个元素
// [ 'asdasdas', 123 ]