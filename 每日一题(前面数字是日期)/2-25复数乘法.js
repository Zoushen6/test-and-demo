/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var complexNumberMultiply = function(num1, num2) {
    let arr1 = num1.slice(0,num1.length-1).split('+');
    let arr2 = num2.slice(0,num2.length-1).split('+');
    let a = arr1[0] * arr2[0] - arr1[1] * arr2[1];
    let b = arr1[0] * arr2[1] + arr1[1] * arr2[0];
    return a + '+' + b + 'i'
};

console.log( complexNumberMultiply("1+1i","1+1i"));