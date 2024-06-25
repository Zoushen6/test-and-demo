let s = "bb";

let test = function(s) {
    let judge = (s,l,r) => {
        while(l>0 && r<s.length&&s[l] == s[r]){
            l--;
            r++;
        }
        //
        console.log(l,r);
        console.log(s.substr(l+1,r-l-1));
        return s.substr(l + 1, r-l-1);
    };
    let str = '';
    for(let i = 0;i < s.length;i++) {
        let s1 = judge(s,i,i);
        let s2 = judge(s,i,i+1)
        str = s2.length>str.length?s2:str;
        str = s1.length>str.length?s1:str;
    }
    return str

}

console.log('res:'+test(s));


