let getnum = function(n,s) {
    let num0=0,num1=0,lef0=0,right1=0
    if(n%2 === 0){
        for(let i = 0;i < n;i++) {
            if(s[i] == '0'){
                if(i<=((n/2)-1)){
                    ++lef0;
                    ++num0;
                }
                ++num0;
            }else {
                 if(i>((n/2)-1)){
                    ++right1;
                    ++num1;
                }
                ++num1;
            }
        }
        let res =  Math.min(Math.min(num0,num1),lef0+right1)
        console.log(res);
        return res
    }
    if(n%2 !==0) {
        for(let i = 0;i < n;i++) {
            if(s[i] == '0'){
                ++num0;
            }else {
                ++num1;
            }
        }
        let res = Math.min(num0,num1)
        console.log(res);
        return res
    }
}
getnum(6,'111001')