/**
 * @param {number[][]} grid
 * @return {number[]}
 */
 let grid = [[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1],[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1]];

 var findBall = function(grid) {
    var res = [];
    var i = 0,j;
    for(j = 0;j < grid[0].length;j++) {
        res.push(findRe(grid,i,j))
    }
    console.log(res);
    return res;
};

var findRe = function(grid,i,j) {
    console.log(i,j);
    if(grid.length === i){
        return j;
    }
    if((grid[i][j] == -1 && j == 0) || (grid[i][j] == 1 &&  j == grid[i].length-1)) {
        return -1;
    }else if (grid[i][j] > 0) {
        if(grid[i][j] > grid[i][j+1])
            return -1;
        else {
            ++i;
            ++j;
        }
    }else if (grid[i][j] < 0) {
        if(grid[i][j] < grid[i][j-1])
            return -1;
        else {
            ++i;
            --j;
        }
    }
    return findRe(grid,i,j)
};

findBall(grid)