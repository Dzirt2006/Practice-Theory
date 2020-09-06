class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(val) {
        if (val < this.value) {
            if (this.left) {
                this.left.insert(val);
            } else {
                this.left = new BST(val)
            }
        } else if (val >= this.value) {
            if (this.right) {
                this.right.insert(val);
            } else {
                this.right = new BST(val)
            }
        }
        return this;
    }

    contains(value) {
        if (value > this.value) {
            if (this.right) {
                return this.right.contains(value);
            }
        } else if (value < this.value) {
            if (this.left) {
                return this.left.contains(value);
            }
        }
        return value === this.value;
    }

    remove(value, parentNode=this) {
        if (value > this.value) {
            this.right.remove(value, this);
        } else if (value < this.value) {
            this.left.remove(value, this);
        } else if (value === this.value) {
            if (this.left && this.right) {
                let tempNode = this.getMin(this.right);
                this.value = tempNode.value;
                this.right.remove(tempNode.value, this);

            } else if (this.left) {
                let tempNode = this.getMax(this.left);
                this.value = tempNode.value;
                this.left.remove(tempNode.value, this);

            } else if (this.right) {
                let tempNode = this.getMin(this.right);
                this.value = tempNode.value;
                this.right.remove(tempNode.value, this);
            } else {
                console.log(parentNode,this,value)
                if(parentNode===this){
                    return;
                }else if (parentNode.left === this) {
                    parentNode.left = null;
                } else {
                    parentNode.right = null;
                }
            }
        }
        return this;
    }

    getMax(node) {
        if (node.right) {
            return this.getMax(node.right);
        } else {
            return node;
        }
    }

    getMin(node) {
        if (node.left) {
            return this.getMin(node.left);
        } else {
            return node;
        }
    }
}

const tree = new BST(10);
// tree.insert(5).insert(15).remove(5).remove(15);
// tree.remove(10);
// console.log(tree.contains(222))


//-------------------------------------------------------------------------------Find Closest Value In Bst--------

function findClosestValueInBst(tree, target) {
    if (target > tree.value) {
        if (tree.right) {
            let val = closest(tree.value, tree.right.value, target);
            let temp = findClosestValueInBst(tree.right, target)
            return closest(val, temp, target);
        } else {
            return tree.value
        }
    } else if (target < tree.value) {
        if (tree.left) {
            let val = closest(tree.left.value, tree.value, target);
            let temp = findClosestValueInBst(tree.left, target);
            return closest(val, temp, target);
        } else {
            return tree.value
        }
    } else if (tree.value === target) {
        return target;
    } else {
        return null;
    }
}

const closest = (leftInt, rightInt, target) => {
    return Math.abs(target - leftInt) < Math.abs(target - rightInt) ? leftInt : rightInt;
}
