/**
 * Good morning! Here's your coding interview problem for today.
 * This problem was asked by Google.
 *
 * Given the root to a binary tree, implement serialize(root), which serializes the tree into a string,
 * and deserialize(s), which deserializes the string back into the tree.
 *
 * For example, given the following Node class
 *
 * class Node:
 *   def __init__(self, val, left=None, right=None):
 *     self.val = val
 *     self.left = left
 *     self.right = right
 *
 * The following test should pass:
 * node = Node('root', Node('left', Node('left.left')), Node('right'))
 * assert deserialize(serialize(node)).left.left.val == 'left.left'
 */


class Node {
  constructor(val, left, right) {
    this.val = val
    this.left = left
    this.right = right
  }

  calcArea() {
    return this.left
  }
}

const node = new Node('root', new Node('left', new Node('left.left'), new Node('right')))

const serialize = (rootNode) => {
  return JSON.stringify(rootNode)
}

const deserialize = (s) => {
  return JSON.parse(s)
}


console.log(deserialize(serialize(node)))