/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    let res=[],queue = [];
    if(!root) {
        return []
    }
    queue.push(root)
    console.log(queue)
    while(queue.length){
        let node = queue.shift()
        res.push(node.val)
        node.left && queue.push(node.left)
        node.right && queue.push(node.right)
    }
    return res
};

 console.log(levelOrder(null)); 
