/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
 var maximumRequests = function(n, requests) {
    let res = 0;
    let from = new Array(requests.length).fill(0)
    let to = new Array(requests.length).fill(0)
    for(let i = 0; i < requests.length; i++) {
        if(requests[i][0] !== requests[i][1]) {
            from[requests[i][0]]++;
            to[requests[i][1]]++;
        }
    }
    console.log(from);
    console.log(to);

    for(let i = 0; i < requests.length; i++) {
        if(requests[i][0] == requests[i][1]) {
            res++
        }else if(from[requests[i][1]]>0 && to[requests[i][0]]>0) {
            res++;
            from[requests[i][1]]--; 
            to[requests[i][0]]--;
            console.log(i,from,to);
        }
    }
    console.log('res:'+res);
    return res
    
};

maximumRequests(2,[[3,0],[2,2],[3,0],[0,1],[1,2],[0,0],[3,2],[1,2]])


var maximumRequests = function(n, requests) {
    const delta = new Array(n).fill(0);
    let zero = n, ans = 0, cnt = 0;
    const dfs = (requests, pos) => {
        if (pos === requests.length) {
            if (zero === n) {
                ans = Math.max(ans, cnt);
            }
            return;
        }

        // 不选 requests[pos]
        dfs(requests, pos + 1);

        // 选 requests[pos]
        let z = zero;
        ++cnt;
        const r = requests[pos];
        let x = r[0], y = r[1];

        zero -= delta[x] == 0 ? 1 : 0;
        --delta[x];
        zero += delta[x] == 0 ? 1 : 0;

        zero -= delta[y] == 0 ? 1 : 0;
        ++delta[y];
        zero += delta[y] == 0 ? 1 : 0;
        
        dfs(requests, pos + 1);
        --delta[y];
        ++delta[x];
        --cnt;
        zero = z;
    }
    dfs(requests, 0);
    return ans;
};