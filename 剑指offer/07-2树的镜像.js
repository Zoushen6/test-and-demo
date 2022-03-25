/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    if(!root) {
        return true;
    }
    const dfs = (left,right) => {
        if(!left && !right) { // 还是注意这两个判断的顺序
            return true
        }
        if(!left || !right) {
            return false
        }
        
        //(简化)return left.val === right.val && dfs(left.left,right.right) && dfs(left.right,right.left)
        if(left.val === right.val) {
            return dfs(left.left,right.right) && dfs(left.right,right.left)
        }else {
            return false
        }


    }
    return dfs(root.left,root.right)
    
};


//别人的
var isSymmetric = function(root) {
    if(!root) return true;
    const turn = (nodeLeft, nodeRight) => {
        if(!nodeLeft && !nodeRight) return true;
        if(!nodeLeft || !nodeRight) return false;
        return nodeLeft.val === nodeRight.val && turn(nodeLeft.left, nodeRight.right) && turn(nodeLeft.right, nodeRight.left);
    };
    
    return turn(root.left, root.right);
};