class Heap {
    constructor(array, type) {
        console.log(type)
        this.type = type === "min" ? (a, b) => a > b : (a, b) => a < b;
        this.direction = type;
        this.heap = this.buildHeap(array);
        this.lenght = 0;
    }

    buildHeap(array) {
        let xi = Math.floor((array.length - 2) / 2);
        for (let i = xi; i >= 0; i--) {
            this.siftDown(i, array);
        }
        this.lenght = array.length;
        return array;
    }

    siftDown(i, array) {
        if (this.direction === "min") {
            let swapChild = array[(2 * i + 1)] > array[(2 * i + 2)] ? (2 * i + 2) : (2 * i + 1);
            while (array[i] > array[swapChild]) {
                let temp = array[i];
                array[i] = array[swapChild];
                array[swapChild] = temp;
                i = swapChild;
                swapChild = array[(2 * i + 1)] > array[(2 * i + 2)] ? (2 * i + 2) : (2 * i + 1);
            }
        } else {
            let swapChild = array[(2 * i + 1)] < array[(2 * i + 2)] ? (2 * i + 2) : (2 * i + 1);
            while (array[i] < array[swapChild]) {
                let temp = array[i];
                array[i] = array[swapChild];
                array[swapChild] = temp;
                i = swapChild;
                swapChild = array[(2 * i + 1)] > array[(2 * i + 2)] ? (2 * i + 2) : (2 * i + 1);
            }
        }
    }

    siftUp(i, array) {
        let swapParent = Math.floor((i - 1) / 2);
        // while (i > 0 && array[i] < array[swapParent]) {
        while (i > 0 && this.type(array[i], array[swapParent])) {
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
        const result = this.heap.shift();
        this.heap = this.buildHeap(this.heap);
        return result;
    }

    insert(value) {
        let lastElement = this.heap.length-1;
        this.heap.push(value);
        // this.siftUp(lastElement, this.heap);
        this.buildHeap(this.heap);


    }
}


const arrayInpt = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41];
// const arrayInpt = [5, 10, 100, 200, 6]

const minHeap = new Heap(arrayInpt, 'min');
console.log(minHeap.heap);
// minHeap.insert(76);
// console.log(minHeap.heap);


// minHeap.heap.forEach((element,index)=>{
//     let left=2*index+1;
//     let right=2*index+2;
//     console.log(`value: ${element}, index: ${index} || left index: ${left}, left value ${minHeap.heap[left]}|| right index: ${right}, right value: ${minHeap.heap[right]}`);
// })

///---------------------------------------------------------------------continuous median------------------------------------------

class ContinuousMedianHandler {
    constructor() {
        this.minHeap = new Heap([], 'min');
        this.maxHeap = new Heap([], 'max');
        this.median = null;
    }

    insert(number) {
        // console.log('length', this.maxHeap, this.minHeap);
        if (!this.maxHeap.lenght || number < this.maxHeap.peek()) {
            this.maxHeap.insert(number);
        } else {
            this.minHeap.insert(number);
        }
        this.rebalance();
        this.makeMedian();
        return this;
    }

    rebalance() {
        if (this.minHeap.lenght - this.maxHeap.lenght === 2) {
            console.log('in min', this.maxHeap, this.minHeap);
            const val = this.minHeap.remove();
            this.maxHeap.insert(val);
        } else if (this.maxHeap.lenght - this.minHeap.lenght === 2) {
            // console.log('in max', this.maxHeap, this.minHeap);
            const val = this.maxHeap.remove();
            this.minHeap.insert(val);
            // console.log('in max AFTER$  ', this.maxHeap, this.minHeap);
        }

    }

    makeMedian() {

        if (!this.minHeap.lenght) {
            this.median = this.maxHeap.peek();
        } else if (this.maxHeap.lenght === this.minHeap.lenght) {
            const left = this.maxHeap.peek();
            const right = this.minHeap.peek();
            this.median = (left + right) / 2;
        } else {
            this.median = this.maxHeap.lenght > this.minHeap.lenght ? this.maxHeap.peek() : this.minHeap.peek();
        }
        console.log('\n', " min ", this.maxHeap.heap,this.maxHeap.lenght,'\n', "  max", this.minHeap.heap,this.minHeap.lenght," ---", this.median, "\n");
    }


    getMedian() {
        this.makeMedian();
        return this.median;
    }
}


const continin = new ContinuousMedianHandler();
// continin.insert(1).insert(3).insert(7)
continin.insert(5).insert(10).insert(100)
    .insert(200)
    .insert(6).insert(13)
    .insert(14).insert(50).insert(51).insert(52);

console.log(continin.getMedian());



//----------------------------------------------------------------------------------Heap algorithm for permutations----------------------------------

function heapPermutations(arr) {
    const permutations = []
    arrHeapPremSwap(arr, arr.length, permutations);
    return permutations;
}

function arrHeapPremSwap(arr, size, permutation) {
    if (size === 1) {
        permutation.push([...arr]);
    } else {
        for (let i = 0; i < size; i++) {
            arrHeapPremSwap(arr, size - 1, permutation);
            if (size % 2 === 1) {
                let temp = arr[0];
                arr[0] = arr[size - 1];
                arr[size - 1] = temp;
            } else {
                let temp = arr[i];
                arr[i] = arr[size - 1];
                arr[size - 1] = temp;
            }
        }
    }
}

// console.log(heapPermutations([1, 2, 3,4]));

