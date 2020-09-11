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


