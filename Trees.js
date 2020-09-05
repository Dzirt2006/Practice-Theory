
// This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function nodeDepths(root) {
    let count=1;
    travNDepth(root,count);
}

function travNDepth(root,count){
    if(!root.left && !root.right ){
        count++
        return count;
    }else{
        let summ=count;
        if(root.left){
            summ+=travNDepth(root.left,count+1);
        }
        if(root.right){
            summ+=travNDepth(root.right,count+1);
        }
        return summ;
    }
}




//-------------------------------------------------------------------------------------------------Invert Binary Tree-----------------

function invertBinaryTree(tree) {
    if(tree.value){
        let temp=tree.left;
        tree.left=tree.right;
        tree.right=temp;
        invertBinaryTree(tree.right);
        invertBinaryTree(tree.left);
        return tree;
    }else{
        return null;
    }
}
//---------------------------------------------------------------------------------------------Branch Sums---------------------

function branchSums(root) {
    const resArr=[];
    branchTraversalSum(root,0,resArr);
    return resArr;
}

function branchTraversalSum(node,val,arr){
    if(!node.left && !node.right){
        val+=node.value;
        arr.push(val);
    }else{
        val+=node.value;
        if(node.left) branchTraversalSum(node.left,val,arr);
        if(node.right) branchTraversalSum(node.right,val,arr);
    }
}
