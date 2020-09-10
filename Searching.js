function binarySearch(array, target, startIndex = 0, endIndex = array.length - 1) {
    if (endIndex<startIndex) {
        return array[startIndex] === target;
    } else {
        let middle = ((endIndex + startIndex) / 2) | 0;
        if (array[middle] === target) return middle;
        if (target > array[middle]) {
            return binarySearch(array, target, middle+1, endIndex);
        } else {
            return binarySearch(array, target, startIndex, middle-1);
        }
    }
}


// console.log(binarySearch([0, 1, 21, 32, 33, 34, 45, 45, 61, 71, 72, 73], 73));

//----------------------------------------------------------------------------------------------------------------------------
/*
input:  shiftArr = [9, 12, 17, 2, 4, 5], num = 2 # shiftArr is the
                                                 # outcome of shifting
                                                 # [2, 4, 5, 9, 12, 17]
                                                 # three times to the left
*/
function shiftedArrSearch(shiftArr, num) {
    const pivot = pivotR(shiftArr, 0, shiftArr.length - 1);
    if (shiftArr[0] <= num) {
        return bsearch(shiftArr, 0, pivot, num);
    } else if (shiftArr[pivot + 1] <= num) {
        return bsearch(shiftArr, pivot + 1, shiftArr.length - 1, num);
    }
}

const bsearch = (arr, start, end, target) => {
    if (start === end) {
        return arr[start] === num ? start : -1;
    } else if (start + 1 === end) {
        if (arr[start] === target) {
            return start;
        }
        if (arr[end] === target) {
            return end;
        }
        return -1;
    } else {
        let midle = start + Math.floor((end - start) / 2);
        if (arr[midle] > target) {
            end = midle;
            return bsearch(arr, start, end, target);
        } else if (arr[midle] < target) {
            start = midle;
            return bsearch(arr, start, end, target);
        } else {
            return midle;
        }

    }
}

function pivotR(arr, start, end) {
    while (arr[start] > arr[end]) {
        end--;
    }
    return end;
}

// console.log(shiftedArrSearch([9, 12, 17, 2, 4, 5], num = 9));
// console.log(shiftedArrSearch([9, 12, 17, 2, 4, 5], num = 12));
// console.log(shiftedArrSearch([9, 12, 17, 2, 4, 5], num = 17));
// console.log(shiftedArrSearch([9, 12, 17, 2, 4, 5], num = 2));
// console.log(shiftedArrSearch([9, 12, 17, 2, 4, 5], num = 4));
// console.log(shiftedArrSearch([1, 2, 3, 4, 5, 0], num = 0));

