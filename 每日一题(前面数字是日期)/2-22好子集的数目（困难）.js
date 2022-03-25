const PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
const NUM_MAX = 30;
const MOD = 1000000007;
var numberOfGoodSubsets = function(nums) {
    const freq = new Array(NUM_MAX + 1).fill(0); //记录nums中每个数出现的频率
    for (const num of nums) {
        ++freq[num];
    }
    //console.log(freq);
    const f = new Array(1 << PRIMES.length).fill(0);
    // console.log(1 << PRIMES.length); 1024  2的10次方
    f[0] = 1; 
    for (let i = 0; i < freq[1]; ++i) {
        f[0] = f[0] * 2 % MOD;  //有freq[1]个1  1和所有子集都可以组成好子集， n个1有2的n次方个排列方式
    }
    
    for (let i = 2; i <= NUM_MAX; ++i) {//[1-30]
        if (freq[i] === 0) {
            continue;
        }
        
        // 检查 i 的每个质因数是否均不超过 1 个
        let subset = 0, x = i; 
        let check = true;
        for (let j = 0; j < PRIMES.length; ++j) { //[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
            const prime = PRIMES[j];
            if (x % (prime * prime) == 0) { 
                // console.log(x);  4
                check = false;
                break;
            }
            if (x % prime === 0) {
                subset |= (1 << j);
                console.log(subset.toString(2),"j:"+j);
            }
        }
        if (!check) {
            continue;
        }

        // 动态规划
        for (let mask = (1 << PRIMES.length) - 1; mask > 0; --mask) {
            if ((mask & subset) === subset) {
                f[mask] = ((f[mask] + (f[mask ^ subset]) * freq[i]) % MOD);
            }
        }
    }

    let ans = 0;
    for (let mask = 1, maskMax = (1 << PRIMES.length); mask < maskMax; ++mask) {
        ans = (ans + f[mask]) % MOD;
    }
    
    return ans;
};

numberOfGoodSubsets([6,1,2,2,3,4]);