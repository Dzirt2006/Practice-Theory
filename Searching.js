

function binarySearch(array, target) {
    const middle = (array.length / 2) | 0;
    if (array[0]===target || array[middle]===target) {
        return true
    }
    if (array[middle] > target) {
        const arr = array.slice(0, middle)
        let res= binarySearch(arr, target);
    } else if (array[middle] < target) {
        const arr = array.slice(middle)
        binarySearch(arr, target);
    } else {
        return -1
    }
}


// console.log(binarySearch([0, 1, 21, 32, 33, 34, 45, 45, 61, 71, 72, 73], 33));

//----------------------------------------------------------------------------------------------------------------------------
