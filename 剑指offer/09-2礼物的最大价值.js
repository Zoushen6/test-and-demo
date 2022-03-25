/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxValue = function(grid) {
    let rlen = grid.length,clen = grid[0].length;
    for(let i = 1;i < rlen;i++) { //初始化第一列
        grid[i][0] += grid[i-1][0]
    }
    for(let j = 1;j < clen;j++) { //初始化第一行
        grid[0][j] += grid[0][j-1]
    }
    for(let i = 1;i < rlen; i++) {
        for(let j = 1;j < clen;j++) {
            grid[i][j] += Math.max(grid[i-1][j],grid[i][j-1])
        }
    }
    console.log(grid[rlen-1][clen-1]);

    return grid[rlen-1][clen-1]
};
maxValue([
    [1,2,5],
    [3,2,1]
])