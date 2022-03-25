/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let matrix = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ];

 var findNumberIn2DArray = function(matrix, target) {
    if(!matrix.length){
        return false
    }
     let n = matrix.length,m = matrix[0].length;
     let flag = false;
     if(target<matrix[0][0] || target>matrix[n-1][m-1] ){
         return false;
     }
     for(let i = 0;i < n; i++){
        if(target >= matrix[i][0] && target <= matrix[i][m-1]){
            flag = binarySearch(matrix[i],target)
        }
        if(flag){
            break;
        }
     }
     return flag;
};

var binarySearch = function(arr, target) {
    let left = 0,right = arr.length-1;
    while(left<=right){
        let mid = parseInt((left+right)/2); //(left+right)/2  加括号加括号加括号
        if( arr[mid] == target) {
           return true;
        }else if (arr[mid] < target) {
            left = mid + 1;
        }else if (arr[mid] > target) {
            right = mid-1;
        }
    }
    return false
}

//线性查找
// var findNumberIn2DArray = function (matrix, target) {
//     if (matrix.length === 0) return false
//     let i = 0
//     let j = matrix[0].length - 1
//     while (i <= matrix.length - 1 && j >= 0) { // i要与矩阵的行数作比较，而不是列数
//         if (matrix[i][j] === target) {
//             return true
//         }
//         if (matrix[i][j] > target) {
//             j--
//         }
//         if (matrix[i][j] < target) {
//             i++
//         }
//     }
//     return false
// };

console.log(findNumberIn2DArray(matrix,66)); 