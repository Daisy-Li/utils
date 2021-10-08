/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

 var levelOrder = function(root) {
  if(!root) {
      return []
  }
  var res = []
  var queue = [root]
  while(queue.length > 0) {
      var len = queue.length
      var subRes = []
      for( var i = 0;i<len;i++) {
          var node = queue.shift()
          subRes.push(node.val)
          if(node.left) {
              queue.push(node.left)
          }
          if(node.right) {
              queue.push(node.right)
          }
      }
      res.push(subRes)
  }
  return res
};

// 二叉排序树
var findmin = function(root) {
  if(!root) {
    return null
  } else if(root.left == null) {
    return root
  } else {
    findmin(root.left)
  }
}
