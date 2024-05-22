var candy = function(ratings) {
    let n = ratings.length
    let arr = new Array(n).fill(1)
    for(let i=0;i < n-1;i++) {
        if(ratings[i] < ratings[i+1]) {
            arr[i+1] = arr[i] + 1
        }
    }
    console.log(arr)
    for(let j=n-1;j > 0;j--) {
        if(ratings[j] < ratings[j-1] && arr[j-1] <= arr[j]) {
            arr[j-1] = arr[j] + 1
        }
    }
    console.log(arr)
    return arr.reduce((res,item) => res+=item,0)
};

candy([1,2,87,87,87,2,1])