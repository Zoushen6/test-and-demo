var replaceSpace = function(s) {
    let arr = [...s];
    s =  s.replaceAll(' ', '%20')
    console.log(s);
    return s
};

console.log(replaceSpace('We are happy.'));