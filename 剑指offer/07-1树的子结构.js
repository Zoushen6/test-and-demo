/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
 var isSubStructure = function(A, B) {
    if(!B || !A) {
        return false
    }
    if(A.val == B.val && dfs(A,B)) {
       return true
    }else {
        return isSubStructure(A.left,B)|| isSubStructure(A.right,B)
    }
};

var dfs = function(A,B) {
    if(!A) {
        return false
    }
    if(!B) {
        return true
    }
    if(A.val == B.val) {
        let flag = true;
        if(B.left) {
            flag &=  dfs (A.left,B.left)
        }
        if(B.right) {
            flag &= dfs (A.right,B.right)
        }
        return flag
    }else {
        return false;
    }
}

//简化
var isSubStructure = function(A, B) {
    const dfs = function(A,B) {
        if(!B) { //注意  如果先判断A是不对的  应该先判断B
            return true
        }
        if(!A) {
            return false
        }
        
        if(A.val == B.val) {
            return dfs (A.left,B.left) && dfs (A.right,B.right)
        }else {
            return false;
        }
    }
   if(!B || !A) {
       return false
   }
   return dfs(A,B) || isSubStructure(A.left,B)|| isSubStructure(A.right,B)
};

