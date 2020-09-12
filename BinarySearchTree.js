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

    remove(value, parentNode = this) {
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
                console.log(parentNode, this, value)
                if (parentNode === this) {
                    return;
                } else if (parentNode.left === this) {
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
tree.insert(5).insert(15).insert(13).insert(2).insert(1).insert(22).insert(14);
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


//---------------------------------------------------------------------------------Validate Bst---------------------------------


function validateBst(tree) {
    return validateBstRec(tree, -Infinity, Infinity);
}

const validateBstRec = (tree, min, max) => {
    if (tree === null) return true;
    if (tree.value < min || tree.value >= max) return false;
    const left = validateBstRec(tree.left, min, tree.value);
    const right = validateBstRec(tree.right, tree.value, max);
    return left === right;
}

//----------------------------------------------------------------------------------Traversal BST---------------------------------

function inOrderTraverse(tree, array) {
    if (tree) {
        inOrderTraverse(tree.left, array);
        array.push(tree.value);
        inOrderTraverse(tree.right, array);
    }
    return array;
}

function preOrderTraverse(tree, array) {
    if (tree) {
        array.push(tree.value);
        preOrderTraverse(tree.left, array);
        preOrderTraverse(tree.right, array);

    }
    return array;
}

function postOrderTraverse(tree, array) {
    if (tree) {
        postOrderTraverse(tree.left, array);
        postOrderTraverse(tree.right, array);
        array.push(tree.value);
    }
    return array;
}

console.log(preOrderTraverse(tree, []))

//---------------------------------------------------------------------------------------------min height ------



const minHeightBst = (arr, min = 0, max = arr.length - 1, bst) => {
    if(min>max)return
    if (min === max) {
        bst.insert(arr[min]);
        return bst;
    }
    // console.log(arr,min,max,bst)
    const mid = (min + max) / 2 | 0;
    if (!bst) {
        bst = new BST(arr[mid])
    } else {
        bst.insert(arr[mid]);
    }
    let left = arr[mid - 1] ? mid - 1 : -1;
    let right = arr[mid + 1] ? mid + 1 : -1;
    console.log(min,left,mid,right,max)
    if (left > -1) {
        hell(arr, min, left, bst);
    }
    if (right > -1) {
        hell(arr, right, max,bst);
    }
    return bst;
}


const hell = (arr, min = 0, max = arr.length - 1, bst=null) => {
    if(min>max)return
    if (min === max) {
        bst.insert(arr[min]);
        return bst;
    }
    // console.log(arr,min,max,bst)
    const mid = (min + max) / 2 | 0;
    if (bst===null) {
        bst = new BST(arr[mid])
    } else {
        bst.insert(arr[mid]);
    }
    hell(arr, min, mid-1, bst);
    hell(arr, mid+1, max,bst);
    return bst;
}

console.log(hell([1, 2, 5, 7, 10, 13, 14, 15, 22]))
