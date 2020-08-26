function binarySearch(array, target) {
    const middle = (array.length / 2) | 0;
    if (array[0] === target || array[middle] === target) {
        return true
    }
    if (array[middle] > target) {
        const arr = array.slice(0, middle)
        let res = binarySearch(arr, target);
    } else if (array[middle] < target) {
        const arr = array.slice(middle)
        binarySearch(arr, target);
    } else {
        return -1
    }
}


// console.log(binarySearch([0, 1, 21, 32, 33, 34, 45, 45, 61, 71, 72, 73], 33));

//----------------------------------------------------------------------------------------------------------------------------
/*
input:  shiftArr = [9, 12, 17, 2, 4, 5], num = 2 # shiftArr is the
                                                 # outcome of shifting
                                                 # [2, 4, 5, 9, 12, 17]
                                                 # three times to the left

output: 3 # since it’s the index of 2 in arr
 */
// function shiftedArrSearch(shiftArr, num) {
//     let lastIndex = shiftArr.length - 1;
//     let count = 0;
//     while (shiftArr[0] !== num && count < lastIndex) {
//         let shift=shiftArr.shift();
//         shiftArr.push(shift);
//         count++;
//     }
//     if(shiftArr[0]===num){
//         return count;
//     }else{
//         return -1;
//     }
// }

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
// console.log(shiftedArrSearch([9, 12, 17, 2, 4, 5], num = 5));

