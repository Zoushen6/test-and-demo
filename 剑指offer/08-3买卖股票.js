/**
 * @param {number[]} prices
 * @return {number}
 */
//  var maxProfit = function(prices) {
//     if(prices.length < 2) return 0
//     let arr = [];
//     for(let i = 0;i< prices.length-1;i++){
//         let price = 0;
//         for(let j = i+1;j<prices.length;j++) {
//             if(prices[i]<prices[j]) {
//                 price = Math.max(price,prices[j]-prices[i]) 
//             }
//         }
//         arr[i] = price
//     }
//     return Math.max(...arr)
// };


var maxProfit = function(prices) {
    let minprice = Number.MAX_VALUE;
    let maxProfit = 0; 
    for(const price of prices) {
        maxProfit = Math.max(price - minprice,maxProfit);
        minprice = Math.min(price,minprice);
    }
    return maxProfit
};
console.log(maxProfit([7,1,5,3,6,4]))
