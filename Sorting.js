const input = [8, 5, 2, 9, 5, 6, 3];

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            } else {
                continue;
            }
        }

    }
    return array;
}

// console.log(bubbleSort(input));


//---------------------------------------------------------------------------------------------------------- Selection Sort-----


function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let min = i;
        let j = i + 1
        while (j < array.length) {
            if (array[j] < array[min]) {
                min = j;
            }
            j++;
        }
        if (min !== i) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}

// console.log(selectionSort(input));

//-------------------------------------------------------------------------------------------------------- Insertion Sort-------
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let j = i;
        while (array[j] < array[j - 1]) {
            let temp = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temp;
            j--;
        }
    }
    return array;
}

// console.log(insertionSort(input));


//----------------------------------------------------------------------------------------------------Quick Sort-----------

function quickSort(array) {
    let r = array.length - 1;
    help(array, 0, r)
    return array;
}

const help = (arr, start, end) => {
    if (start >= end) {
        return
    } else {
        const pivot = start;
        let left = start + 1;
        let right = end;
        while (right >= left) {
            if (arr[left] > arr[pivot] && arr[right] < arr[pivot]) {
                let temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
            }
            if (arr[left] <= arr[pivot]) {
                left++
            }
            if (arr[right] >= arr[pivot]) {
                right--;
            }
        }
        let temp = arr[right];
        arr[right] = arr[pivot];
        arr[pivot] = temp;
        help(arr, start, right - 1);
        help(arr, right + 1, end);
    }
}
const lol = [1, 3, 2]
quickSort(lol)
// console.log(lol);

//----------------------------------------------------------------------------------------------------------- Merge Sort ----


function mergeSort(arr) {
    if (arr.length === 2) {
        if (arr[0] > arr[1]) {
            let temp = arr[0];
            arr[0] = arr[1];
            arr[1] = temp;
        }
        return arr;
    } else if (arr.length < 2) {
        return arr;
    } else {
        let leftArr = mergeSort(arr.slice(0, (arr.length / 2)));
        let rightArr = mergeSort(arr.splice(arr.length / 2, arr.length));
        console.log(leftArr, rightArr)
        let newArr = [];
        let left = 0;
        let right = 0;
        let newIndex = 0;
        while (left < leftArr.length && right < rightArr.length) {
            if (leftArr[left] < rightArr[right]) {
                newArr[newIndex] = leftArr[left];
                left++;
            } else {
                newArr[newIndex] = rightArr[right];
                right++;
            }
            newIndex++;
        }
        if (left < leftArr.length) {
            const temp = leftArr.slice(left)
            return newArr.concat(temp)
        }
        if (right < rightArr.length) {
            return newArr.concat(rightArr.slice(right))
        }
    }
}


//------------------------------------------------------------------------------------------------------------Heap Sort---


function builder(array, endIndex = array.length - 1) {
    let last = Math.floor((array.length - 2) / 2);
    for (let i = last; i >= 0; i--) {
        shiftDown(i, array, endIndex);
    }
    // console.log("before",arrHeap,"--------------------------------------------------------------------------------");
}

const swapper = (index1, index2, arr) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}


function shiftDown(i, arr, endIndex) {
    let swapChild = i * 2 + 1;
    while ( swapChild <= endIndex) {
        let childTwo = i * 2 + 2;
        if (childTwo <= endIndex) {
            swapChild = arr[childTwo] > arr[swapChild] ? childTwo : swapChild;
        }
        if (arr[i] < arr[swapChild]) {
            let temp = arr[i];
            arr[i] = arr[swapChild];
            arr[swapChild] = temp;
            i = swapChild;
            swapChild = i * 2 + 1;
        }else return;
    }
}

function heapSort(array) {
    builder(array);
    for (let i = array.length - 1; i > 0; i--) {
        swapper(0, i, array);
        shiftDown(0, array, i - 1);
    }
    return array
}


const arrHeap = [8, 5, 2, 9, 5, 6, 3]

heapSort(arrHeap)
// console.log(arrHeap);




















