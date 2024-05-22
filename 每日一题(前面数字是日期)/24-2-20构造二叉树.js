/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
 //前序和中序
//  var buildTree = function(preorder, inorder) {
//     if (inorder.length == 0) return null;
//     const parent = preorder.shift()
//     const root = new TreeNode(parent)
//     let rootIndex = inorder.findIndex(item => item === parent)
//     root.left = buildTree(preorder,inorder.slice(0,rootIndex))
//     root.right = buildTree(preorder,inorder.slice(rootIndex+1,inorder.length))
//     return root
// };

//中序和后序
// var buildTree = function(inorder, postorder) {
//    if (inorder.length == 0) return null;
//    const parent = postorder.pop()
//    const root = new TreeNode(parent)
//    let rootIndex = inorder.findIndex(item => item === parent)
//    root.right = buildTree(inorder.slice(rootIndex+1,inorder.length),postorder)
//    root.left = buildTree(inorder.slice(0,rootIndex),postorder)
//    return root
// };

// console.log(buildTree([9,3,15,20,7],[9,15,7,20,3])); 

//前序和后序
//https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/305763/you-qian-xu-bian-li-he-hou-xu-bian-li-gou-zao-er-c/?envType=daily-question&envId=2024-02-22
var buildTree = function(preorder, postorder) {
   if (preorder.length == 0) return null;
   const parent = preorder.shift()
   const root = new TreeNode(parent)
   const rootIndex = postorder.findIndex(item => item === preorder[0])
   root.left = buildTree(preorder.slice(0,rootIndex+1),postorder.slice(0,rootIndex+1))
   root.right = buildTree(preorder.slice(rootIndex+1,preorder.length),postorder.slice(rootIndex+1,postorder.length-1))
   return root
};

console.log(buildTree([1,2,4,5,3,6,7],[4,5,2,6,7,3,1])); 