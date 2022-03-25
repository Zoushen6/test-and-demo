/**
 * @param {number} num
 * @return {string}
 */
 var convertToBase7 = function(num) {
    let flag = num<0?true:false
    let b = parseInt(Math.abs(num));
    let res = ''
    while(b >= 7) {
        res+=b%7;
        b = parseInt(b/7)
    }
    res += b
    res += flag?'-':''
    console.log(res.split('').reverse().join(''));
    return res.split('').reverse().join('')
};

convertToBase7(-49)