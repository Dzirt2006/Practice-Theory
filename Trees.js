
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



//------------------------------------------------------------------------------------------------------------------
function findClosestValueInBst(tree, target) {

}

const FCVHelper=(tree,target)=>{
    let val;
    if(target>tree.value){
        if(tree.right){
            val=closest(tree.value,tree.right.value,target);
            let temp=FCVHelper(tree.right,target)
            closest(val,temp,target)
            return val<temp?val:temp;
        }else{
            return null
        }

    }else if(target<tree.value){
        if(tree.left){
            val=closest(tree.left.value,tree.value,target);
            let temp=FCVHelper(tree.left,target);
            return val<temp?val:temp;
        }else{
            return null
        }
    }else if(tree.value===target){
        return target;
    }else{
        return null;
    }
}

const closest=(leftInt,rightInt,target)=>{
    return Math.abs(target-leftInt)<Math.abs(target-rightInt)? leftInt:rightInt;
}



//------------------------------------------------------------------------------------------------------------------

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
//------------------------------------------------------------------------------------------------------------------
