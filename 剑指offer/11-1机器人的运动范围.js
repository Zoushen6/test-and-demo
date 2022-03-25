/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var movingCount = function(m, n, k) {
    let res = 0;
    const visited = Array(m).fill(0).map(() => Array(n).fill(false));
    let dfs = (i,j) => {
        if(i>=m || j>=n || sub(i,j) > k || visited[i][j]) return ;
        ++res;
        visited[i][j] = true;
        dfs(i+1,j);
        dfs(i,j+1)
    }
    let sub = (a,b) => {
        let arr = [...a.toString(),...b.toString()];
        return arr.reduce((res,next) => res = res+Number(next),0)
    }
    dfs(0,0)
    return res
};
movingCount(38,15,9)
