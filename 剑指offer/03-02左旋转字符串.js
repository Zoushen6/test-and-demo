var reverseLeftWords = function(s, n) {
    if(n == 0||n == s.length){
        return s; 
    };
    let s1 = s.substring(0,n);
    let s2 = s.substring(n,s.length);
    console.log(s2,s1);
    return s2+s1

};

console.log(reverseLeftWords('abcdefg',2));