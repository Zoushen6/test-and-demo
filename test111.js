/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function(nums) {
    if(!nums.length) {
        return []
    }
    let temp;
    for(let i=0,j=i+1;j<nums.length;j++) {
        if(nums[i]%2 === 0 && nums[j]%2 !== 0) {
            //如果前面有代码 一定加上分号，不然报错
           [nums[j],nums[i]] = [nums[i],nums[j]];
        }
        if(nums[i]%2 !== 0) i++
    }
    return nums

};

// console.log(exchange([1,2,3,4]));
for(let i = 0;i<5;i++) {
    setTimeout(() => {
        // console.log(i)
    }, 1000);
}

function varTest() {
    var x = 1;
    if (true) {
      var x = 2;  // 同样的变量!
      console.log(x);  // 2
    }
    console.log(x);  // 2
  }

//   varTest()

function testThis() {
    let a = [1,2,3,4,5,6]
    let str = 'aaa'
    a.forEach(function (item) {
        console.log(item);
        console.log(this);
    })
}
// testThis()

let o = {
    props: 37,
    f: () => {
        return this
    }
}
// console.log(o.f());


//原始参数对象
const obj = {
    name: 'aaa',
    value: 10,
    age: 13,
    arr: [1,2,3]
}
//修改后参数对象
const obj2 = {
    name: 'ddaaa',
    value: 10,
    age: 4,
    arr: [1,2,3,4]
}
const time = new Date()

const resultArray = Object.keys(obj).reduce((res,next) => {
    //如果时间放在循环里大概率导致每一个time是不同的
    // const time = new Date()
    if(typeof obj[next] !== 'object' && obj[next] !== obj2[next]) {
        res.push({
            //参数名称
            key: next,
            //修改前
            before: obj[next],
            //修改后
            after: obj2[next],
            //修改事件
            time: time
        })
    }
    return res
},[])
console.log(resultArray);
