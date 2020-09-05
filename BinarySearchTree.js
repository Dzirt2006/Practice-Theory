class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}



//-------------------------------------------------------------------------------Find Closest Value In Bst--------

function findClosestValueInBst(tree, target) {
    if(target>tree.value){
        if(tree.right){
            let  val=closest(tree.value,tree.right.value,target);
            let temp=findClosestValueInBst(tree.right,target)
            return  closest(val,temp,target);
        }else{
            return tree.value
        }
    }else if(target<tree.value){
        if(tree.left){
            let  val=closest(tree.left.value,tree.value,target);
            let temp=findClosestValueInBst(tree.left,target);
            return  closest(val,temp,target);
        }else{
            return tree.value
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
