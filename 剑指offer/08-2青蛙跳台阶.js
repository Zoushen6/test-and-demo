/**
 * @param {number} n
 * @return {number}
 */
 var numWays = function(n) {
    if(n === 0 || n===1) {
        return 1
    }
    let a = 1,b = 1; 
    let sum = 0,mod = 1e9+7;
    for(let i = 1;i < n;i++) {
        sum = (a+b) >= mod?(a+b)%mod:(a+b);
        a = b;
        b = sum
    }
    return sum
};