let dominoes = '.L.R...LR..L..';
function f(dominoes){
    let s = [...dominoes]
    let n = s.length,i = 0;
    let left = 'L' //先默认左边的是往左倒
    while(i<n) {
        let j = i;
        while(j<n&&s[j]=="."){
            j++;
        };
        const right = j<n?s[j]:'R';
        if(left === right){ //如果左右一样
            while(i<j){
                s[i++] = right;
            }
        }else if(left === 'R' && right === 'L'){ //不一样只判断是否相对，因为相反不用管
            let k = j-1;
            while(i<k){
                s[i++] = "R";
                s[k--] = "L"
            }
        }
        //指针跳过这一段 left的值根据匹配到的片段变化
        left = right;
        i = j+1; 
    }
    return s.join('')
}

console.log(f(dominoes));
