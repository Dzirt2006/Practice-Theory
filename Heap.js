class MinHeap {
    constructor(array) {
        this.heap = this.buildHeap(array);
    }

    buildHeap(array) {
        let xi = Math.floor((array.length - 2) / 2);
        for (let i=xi; i >=0 ; i--) {
            this.siftDown(i, array);
        }
        return array;
    }

    siftDown(i, array) {
        let swapChild = array[(2 * i + 1)] > array[(2 * i + 2)] ? (2 * i + 2) : (2 * i + 1); //check what child is smallest
        while (array[i] > array[swapChild]) {
            let temp = array[i];
            array[i] = array[swapChild];
            array[swapChild] = temp;
            i = swapChild;
            swapChild = array[(2 * i + 1)] > array[(2 * i + 2)] ? (2 * i + 2) : (2 * i + 1); //check what child is smallest
        }

    }

    siftUp(i, array) {
        let swapParent = Math.floor((i - 1) / 2);
        while (i > 0 && array[i] < array[swapParent]) {
            let temp = array[i];
            array[i] = array[swapParent];
            array[swapParent] = temp;
            i = swapParent;
            swapParent = Math.floor((i - 1) / 2);
        }
    }

    peek() {
        return this.heap[0];
    }

    remove() {
        const result=this.heap.shift();
        this.heap=this.buildHeap(this.heap);
        return result;
    }

    insert(value) {
        let lastElement = this.heap.length;
        this.heap.push(value);
        this.siftUp(lastElement, this.heap);
    }
}


const arrayInpt = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41];
// const arrayInpt =[10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5]

const minHeap = new MinHeap(arrayInpt);
console.log(minHeap.heap);
// minHeap.insert(76);
// console.log(minHeap.heap);

//
// minHeap.heap.forEach((element,index)=>{
//     let left=2*index+1;
//     let right=2*index+2;
//     console.log(`value: ${element}, index: ${index} || left index: ${left}, left value ${minHeap.heap[left]}|| right index: ${right}, right value: ${minHeap.heap[right]}`);
// })

