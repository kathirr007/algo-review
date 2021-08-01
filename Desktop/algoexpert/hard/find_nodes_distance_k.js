class Node
{
    constructor(item)
    {
        this.data = item;
        this.left = null;
        this.right = null;
    }
}
 
var root =null;
 
function printKDistant(node, k)
{
    if (node == null|| k < 0 )
    {
        return;
    }
    if (k == 0)
    {
        document.write(node.data + " ");
        return;
    }
     
        printKDistant(node.left, k - 1);
        printKDistant(node.right, k - 1);
     
}
 
 
/* Driver program to test above functions */
 
/* Constructed binary tree is
        1
      /   \
     2     3
    /  \   /
   4    5 8 
*/
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(8);
printKDistant(root, 2);
 
// This code is contributed by importantly.
