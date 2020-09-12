// My question
/**
 * A sorted array of distinct integers shiftArr is shifted to the left by an unknown offset
 * and you don’t have a pre-shifted copy of it.
 * For instance, the sequence 1, 2, 3, 4, 5 becomes 3, 4, 5, 1, 2, after shifting it twice to the left.
 * Given shiftArr and an integer num, implement a function shiftedArrSearch that finds and returns the index of num in shiftArr.
 * If num isn’t in shiftArr, return -1. Assume that the offset can be any value between 0 and arr.length - 1.
 */

function shiftedArrSearch(shiftArr, num) {
    let pivot = spliter(shiftArr);
    if (num <= shiftArr[pivot] && num >= shiftArr[0]) {
        return binarySearch(shiftArr, 0, pivot, num);
    } else {
        return binarySearch(shiftArr, pivot + 1, shiftArr.length - 1, num);
    }

}

function binarySearch(arr, start, end, target) {
    if (end === start) {
        return arr[start] === target ? start : -1;
    } else {
        let middle = (start + end) / 2 | 0;
        if (target > arr[middle]) {
            return binarySearch(arr, middle+1, end, target);
        } else if (target < arr[middle]) {
            return binarySearch(arr, start, middle-1, target);
        } else {
            return middle;
        }
    }
}

//search the pivot point
function spliter(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (arr[left] > arr[right]) {
        right--;
    }
    return right;
}


console.log("answer ", shiftedArrSearch([9, 12, 17, 2, 4, 5], 4))


console.log(!!undefined)

//
function shortestWordEditPath(source, target, words) {
    for(let i=0;i<words.length;i++){
        const len=words[i].length-1;

    }
}


const getChar=(word,arr,i)=>{
    for(let j=i;j<arr.length;j++){
        const stack = ['pog'];

        while (stack.lenght) {
            cur = stack.pop();
            if(cur) {
                stack.push(...getChars(cur));
            }


        }
    }
}





const getChar=(word,arr)=>{
    const alphabet = new Set(['abcdefghijklmnopqrstuvwxyz']);

    // word = po

    // arr.includes(alphabet.has(word[0])  ,word[1] )
    // arr.includes(word[0], alphabet.has(word[1]) )

    // alphabet.has('a') ->
}
/*

  ["but", "put", "big", "pot", "pog", "dog", "lot"]

  DOG

  {a-z}og -> pog
  d{a-z}g ->
  do{a-z} ->


  [pog]

  {a-z}og -> pog
  d{a-z}g ->
  do{a-z} ->

  'dog', {a-z}og, d{a-z}g, do{a-z}
  getChars -> []

  const stack = ['pog'];

  while (stack.lenght) {
    cur = stack.pop();
    if(cur) {
     stack.push(...getChars(cur));
    }


  }



*/












































