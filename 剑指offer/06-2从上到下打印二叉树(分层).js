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
        let temp = [];
        for(let i = queue.length;i>0;i--) { //i记录本层的节点个数 太骚了
            let node = queue.shift()
            temp[res.length%2 == 0?'unshift':'push'](node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(temp)
    }
    return res
};

 console.log(levelOrder(null)); 
