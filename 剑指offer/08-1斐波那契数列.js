/**
 * @param {number} n
 * @return {number}
 */
//60ms
 var fib = function(n) {
    let a = 0, b = 1, sum = 0;
     for(let i = 0; i < n; i++) {
         sum = (a + b) % 1000000007;
         a = b;
         b = sum;
     }
     return a;
 };


//我的 
 var fib = function(n) {
    if(n === 0 || n===1) {
        return n
    }
    let a = 0,b = 1; 
    let sum = 0,mod = 1e9+7;
    for(let i = 1;i < n;i++) {
        sum = (a+b) >= mod?(a+b)%mod:(a+b);
        a = b;
        b = sum
    }
    return sum
};