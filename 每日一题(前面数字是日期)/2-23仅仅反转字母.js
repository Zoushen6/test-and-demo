var reverseOnlyLetters = function(ss) {
    let s = [...ss];
    let i=0,j=s.length-1;
    while (i<j) {
        if(!isLetter(s[i])){
            i++;
            continue;
        }
        if(!isLetter(s[j])){
            j--;
            continue;
        }
        [s[i],s[j]] = [s[j],s[i]];
        i++;
        j--;
    }
    console.log(s.join(''));
};

var isLetter = function(s) {
    if((s>='a'&&s<='z') || (s>='A'&&s<='Z'))
    return true
}

reverseOnlyLetters('a-bC-dEf-ghIj')