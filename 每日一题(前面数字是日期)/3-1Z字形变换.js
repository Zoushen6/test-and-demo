/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

//我们在矩阵上填写字符时，会向下填写 r(numRows) 个字符，然后向右上继续填写 r-2r−2 个字符，最后回到第一行，因此 Z 字形变换的周期 t=r+r-2=2r-2t=r+r−2=2r−2

 var convert = function(s, numRows) {
    let str = [...s],i = 0,j = 0;
    if(str.length <= numRows || numRows === 1) {
        return s
    }
    let arr = [];
    for(let a = 0;a<numRows;a++ ) {
        arr.push([])
    }
    while(i < str.length) {

        arr[j].push(str[i])
        if(i%(2*numRows-2) < numRows-1) {
            ++j;
        }else {
            --j;
        }
        ++i;
    }
    let res = arr.reduce((res,next) => {
        res+= next.join('');
        return res;
    },'')
    return res;
};
console.log(convert("PAYPALISHIRING",4));