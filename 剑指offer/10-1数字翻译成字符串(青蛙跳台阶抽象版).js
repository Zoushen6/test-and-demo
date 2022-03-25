/**
 * @param {number} num
 * @return {number}
 */

//dp[0] = dp[1] = 1
//当 num 第 1, 2位的组成的数字 ∈[10,25] 时，显然应有 2 种翻译方法，即 dp[2] = dp[1] + dp[0] = 2，而显然 dp[1] = 1 ，因此推出 dp[0] = 1

 var translateNum = function(num) {
    let dp = [];
    dp[0] = dp[1] = 1;
    let str = num.toString();
    console.log(str);
    for(let i = 2;i <= str.length;i++) {
        let temp = str.substring(i-2,i)
        if(temp-0 >=10 && temp-0 <= 25) {
            dp[i] = dp[i-2] + dp[i-1]
        }else {
            dp[i] = dp[i-1]
        }
    }
    console.log(dp[str.length]);
    return dp[str.length]
};

translateNum(12258)