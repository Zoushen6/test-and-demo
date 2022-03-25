/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
   let arr = [...s];
   let map = new Map();
   let res = 0,i = 0 ,j = 0;
   while(j < arr.length) {
       if(map.has(arr[j])){
           res = Math.max(map.size,res)
           map.delete(arr[i++]);
       }else {
           map.set(arr[j++]);
       }
       console.log(map);

   }
   console.log(Math.max(map.size,res));
   return Math.max(map.size,res) 
};
lengthOfLongestSubstring("cabda")


//截断字符法
var lengthOfLongestSubstring = function(s) {
    let len = s.length, temp = "", max = 0;
    for(let i=0;i<len;i++){
        let index = temp.indexOf(s[i]);
        if(index < 0){
            temp += s[i];
        }else{
            temp = temp.substr(index + 1) + s[i];
        }
        max = Math.max(max, temp.length);
    }
    return max;
};