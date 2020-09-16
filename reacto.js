// const subsetSum=(num,arr)=> {
// let length=arr.length;
// let result=false;
// for(let i=0;i<length;i++){
//     let temp=arr[i];
//     for(let j=0;j<length;j++){
//         if(j!==i){
//             temp+=arr[j];
//         }
//         if(temp===num){
//             result=true;
//         }else if(temp>num){
//             temp=arr[i]
//         }
//     }
// }
// return result;
// }
//
//
//  // console.log(subsetSum(17, [1, 10, 5, 3]));
// console.log(subsetSum(2, [1, 10, 5, 3])); // false
// console.log(subsetSum(10, [1, 10, 5, 3])); // true
// console.log(subsetSum(9, [1, 10, 5, 3])); // true
// console.log(subsetSum(19, [1, 10, 5, 3])); // true
// console.log(subsetSum(17, [1, 10, 5, 3])); // false


function waterArea(heights) {

    const leftMaxes = [];  // to hold the highest bar to the left of each index
    const rightMaxes = []; // to hold the highest bar to the right of each index

    let currentLeftMax = 0;
    let currentRightMax = 0;

    // iterate through heights from left to right to build leftMaxes
    for (let i = 0; i < heights.length; i++) {
        let barHeight = heights[i];
        leftMaxes.push(currentLeftMax);
        if (barHeight > currentLeftMax) currentLeftMax = barHeight;
    }

    // iterate through heights from right to left to build rightMaxes
    for (let i = heights.length - 1; i >= 0; i--) {
        let barHeight = heights[i];
        rightMaxes.unshift(currentRightMax);
        if (barHeight > currentRightMax) currentRightMax = barHeight;
    }
    console.log(leftMaxes, rightMaxes)
    let waterVolume = 0;

    // iterate through the bar heights one last time
    for (let i = 0; i < heights.length; i++) {
        let blockHeight = heights[i];
        let waterHeight = Math.min(leftMaxes[i], rightMaxes[i]);
        if (waterHeight < blockHeight) continue;

        // if the water is higher than the block, add the difference to
        // the total waterVolume counter
        waterVolume += waterHeight - blockHeight;
    }

    return waterVolume;
}

//----------------------------------------------------------------------------------------------------------------------------
const maxArea = function (height) {
    let area = 0;
    let leftIndex = 0;
    let rightIndex = height.length - 1;
    while (leftIndex < rightIndex) {
        console.log((Math.min(height[leftIndex], height[rightIndex]) * (rightIndex - leftIndex)))
        area = Math.max(area, (Math.min(height[leftIndex], height[rightIndex]) * (rightIndex - leftIndex)));
        if (height[leftIndex] > height[rightIndex]) {
            rightIndex--;
        } else {
            leftIndex++;
        }

    }
    console.log(area);
};


const heights = [1, 5, 1, 0, 3, 1, 4, 0, 3]
// console.log(waterArea(heights)) // returns 14
// maxArea(heights)
//----------------------------------------------------------------------------------------------------------------------------


function isValidSubsequence(array, arr2) {
    // let check=array.length===sequence.length;
    let sequence = [...arr2];
    let sub = true;
    for (let i = 0; i < array.length; i++) {

        if (sequence.includes(array[i])) {
            if (arr2[i] !== array[i]) {
                sub = false;
            }
            const index = sequence.indexOf(array[i]);
            sequence = sequence.slice(0, index).concat(sequence.slice(index + 1))
        }
    }
    return (sequence.length <= 0 && sub);
}

//
//
// const array = [5, 1, 22, 25, 6, -1, 8, 10]
// const seque = [5, 1, 25, 22, 6, -1, 8, 10]
//
// console.log(isValidSubsequence(array,seque)); //3
// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring("dvdf")); //3


// const map=new Map([[1,'first'],[2,'second']])
// console.log(map.get(1))

//----------------------------------------------------------------------------------------------------------------------------
let diff = function (x, y) {
    return x - y
}


var v = 1
var f1 = function () {
    console.log(v)
}

var f2 = function () {
    var v = 2;
    f1()
}
// console.log(f2())


var a = [1]
a[100] = 2

// console.log([] == [])

//----------------------------------------------------------------------------------------------------------------------------
function moveElementToEnd(array, toMove) {
    const arr = [];
    let counter = 0;
    array.forEach(ele => {
        if (ele !== toMove) {
            arr.push(ele);
        } else {
            counter++;
        }
    })
    for (let i = 0; i < counter; i++) {
        arr.push(toMove);
    }
    return arr;
}


// console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));
//----------------------------------------------------------------------------------------------------------------------------

function getNthFib(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return (getNthFib(n - 1) + getNthFib(n - 2));
    }
}

// console.log(getNthFib(8))

//----------------------------------------------------------------------------------------------------------------------------

function twoNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);//sort in order
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        const summ = array[left] + array[right];
        if (summ === targetSum) {
            return [left, right];
        }
        if (summ < targetSum) {
            left++;
        } else {
            right--;
        }
    }
}


// const arrNum=[3, 5, -4, 8, 11, 1, -1, 6]
// const target=4
//
//
// console.log(twoNumberSum(arrNum,target));
//


//----------------------------------------------------------------------------------------------------------------------------

var longestCommonPrefix = function (strs) {
    let pre = "";
    let shortestChar = strs.sort((a, b) => a.length - b.length)[0];
    for (let i = 1; i < shortestChar.length; i++) {
        pre = shortestChar.slice(0, i);

        for (let j = 1; j < strs.length; j++) {
            console.log(strs[j].slice(0, i))
            if (pre !== strs[j].slice(0, i)) {
                return pre.slice(0, pre.length - 1)
            }
        }
    }
    return pre;
};


// const arr = ["flower", "flow", "flight","flomght"];
// console.log(longestCommonPrefix(arr))


//----------------------------------------------------------------------------------------------------------------------------


const roman = new Map(
    [["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000]]
);

var romanToInt = function (s) {
    let int = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i + 1]) {
            if (roman.get(s[i]) < roman.get(s[i + 1])) {
                int += (roman.get(s[i]) - roman.get(s[i + 1])) * (-1);
                if (i + 1 === s.length - 1) {
                    break;
                }
                i++;
            } else {
                int += roman.get(s[i]);
            }

        } else {

            int += roman.get(s[i]);
        }
    }
    return int;
}


// console.log(romanToInt("MCMXCIV"))


//----------------------------------------------------------------------------------------------------------------------------

var isPalindrome = function (x) {
    if (x < 0) return false
    let temp = x;
    let pol = 0;
    while (temp) {
        let temp1 = temp % 10 / 10;
        pol = (pol + temp1) * 10;
        temp = temp / 10 | 0;
    }
    return (pol === x);
};

// console.log(isPalindrome(10))

//---------------------------------------------------------------------------------------------------------------------------
const prSum = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];

function productSum(array) {
    return summHelper(array, 2);
}


const summHelper = (arr, int) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "object") {
            sum += (int * (summHelper(arr[i], (int + 1))))

        } else {
            sum += arr[i]
        }
    }

    return sum;
}

// console.log(productSum(prSum))


//------------------------------------------------------------------------------------------------------------------


function shortenPath(path) {
    const stack = [];
    if (path[0] === '/') stack.push('')
    let arr = path.split('/').filter(x => (x !== '' && x !== '.'))
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '..') {
            if (stack[stack.length - 1] === '..' || stack.length === 0) {
                stack.push(arr[i])
            } else if (stack[stack.length - 1] !== '') {
                stack.pop();
            }
        } else {
            stack.push(arr[i]);
        }
    }
    if (stack.length === 1 && stack[0] === '') {
        return '/'
    } else {
        return stack.join('/');
    }
}


// console.log(shortenPath("/../../foo/bar/baz"))


//------------------------------------------------------------------------------------------------------------------


function balancedBrackets(str) {
    const stack = [];
    const arr = ['[', '{', '(', ']', '}', ')'];
    for (let i = 0; i < str.length; i++) {

        if (opening(str[i])) {
            stack.push(str[i]);
        } else {
            const top = stack[stack.length - 1]
            if (closing(top, str[i])) {
                stack.pop();
            } else {
                if (!arr.includes(str[i])) {
                    continue;
                } else {
                    return false;
                }
            }
        }
    }

    return stack.length === 0;
}

const closing = (char1, char2) => {
    const map = {'{': '}', '[': ']', '(': ')'};
    return map[char1] === char2;
}

const opening = char => {
    const arr = ['[', '{', '('];
    return arr.includes(char);
}


// console.log(balancedBrackets("([])(){}(()()())"));


//------------------------------------------------------------------------------------------------------------------


let reverse = function (n) {
    let digit, result = 0

    while (n) {
        digit = n % 10                  //  Get last digit. Ex. 123/10 → 12.3 → 3
        result = (result * 10) + digit  //  Ex. 123 → 1230 + 4 → 1234
        n = n / 10 | 0                      //  Remove last digit. Ex. 123 → 12.3 → 12
    }
    if (result > (Math.pow(2, 32))) {
        result = 0;
    }
    return result
};

//---------------------------------------------------------------------------------Tree Number Sum----------------------------------------

//wrong but nice (gives dublicates
function threeNumberSumHashMap(arr, target) {
    arr.sort();
    let map = new Map();
    const result = [];
    arr.forEach(int => map.set(int, int));
    let left = 0;
    let right = left + 1;
    while (left < arr.length - 1) {
        let sum = arr[left] + arr[right];
        let forSearch = target - sum;
        const finder = map.get(forSearch)
        console.log(left, right)
        if (finder && finder !== arr[left]) {
            result.push([arr[left], arr[right], finder])
        }
        if (right === arr.length - 1) {
            left++;
            right = left + 1;
        } else {
            right++;
        }
    }
    return result;
}


//wrong but nice (gives dublicates
function threeNumberSum(arr, target) {
    arr.sort((x, y) => x - y);
    const result = [];
    console.log(arr)
    for (let i = 0; i < arr.length - 1; i++) {
        let left = i + 1;
        let right = arr.length - 1;
        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];
            console.log(sum)
            if (sum > target) {
                right--;
            } else if (sum < target) {
                left++;
            } else {
                result.push([arr[i], arr[left], arr[right]])
                right--;
                left++;
            }

        }
    }
    return result;
}

// console.log(threeNumberSum([-4, 1, 12, -5, 7, 5], 3));


//---------------------------------------------------------------------------------move all zeros to theend of the array    ----------------------------------------

const zerosArray = [0, 6, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 5, 0, 0, 0];

function moveZeros(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        while (arr[right] === 0) {
            right--;
        }
        if (arr[left] === 0) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
        }
        left++;
    }
}

moveZeros(zerosArray)
// console.log(zerosArray);


//--------------------------------------------------------------------------------------Spiral Traverse---------------------------------------------------------


function spiralTraverse(arr) {
    let firstRow = 0;
    let secondCol = 0;
    let firstCol = arr[0].length - 1;
    let secondRow = arr.length - 1;
    const ress = [];
    while (firstRow <= secondRow && firstCol >= secondCol) {
        //first row run
        // console.log(firstRow,firstCol,secondRow,secondCol)
        for (let i = secondCol; i <= firstCol; i++) {
            ress.push(arr[firstRow][i]);
            console.log("first row ", arr[firstRow][i])
        }
        //first column
        for (let i = firstRow + 1; i <= secondRow; i++) {
            ress.push(arr[i][firstCol]);
            console.log("first column ", arr[i][firstCol])
        }

        //second Row(reverse)
        for (let i = firstCol - 1; i >= secondCol; i--) {
            // console.log("second Row ****************",secondRow,i)
            if (secondRow === firstRow) break;
            ress.push(arr[secondRow][i])
            console.log("second Row ", arr[secondRow][i])
        }
        //second Column(reverse)
        for (let i = secondRow - 1; i > firstRow; i--) {
            if (secondCol === firstCol) break;
            ress.push(arr[i][secondCol])
            console.log("second Column ", arr[i][secondCol], i)
        }
        firstRow++;
        secondCol++;
        firstCol--;
        secondRow--;
    }
    return ress;
}

// console.log(spiralTraverse([[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]));
// console.log(spiralTraverse( [
//         [27, 12, 35, 26],
//         [25, 21, 94, 11],
//         [19, 96, 43, 56],
//         [55, 36, 10, 18],
//         [96, 83, 31, 94],
//         [93, 11, 90, 16]
//     ]
// ));

//
// console.log(spiralTraverse(
//     [[1, 2, 3], [12, 13, 4], [11, 14, 5], [10, 15, 6], [9, 8, 7]
// ]))


//--------------------------------------------------------------------------------------------------------
/**
 * Given an array of integers arr where each element is at most k places away from its sorted position,
 * code an efficient function sortKMessedArray that sorts arr. For instance, for an input array of size 10 and k = 2,
 * an element belonging to index 6 in the sorted array will be located at either index 4, 5, 6, 7 or 8 in the input array.
 *
 * input:  arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9], k = 2
 * output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 */

function sortKMessedArrayWindow(arr, k) {
    for (let i = 0; i < arr.length - k + 1; i++) {
        let j = i + k;
        while (j > i && arr[j] < arr[j - 1]) {
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            j--;
        }
    }
    return arr;
}

//---------------------------------------------------------------------------------------smallestDifference

//brute force O(n*m); space O(1);
function smallestDifferenceBrute(arrayOne, arrayTwo) {
    let closest;
    let resArr;
    for (let i = 0; i < arrayOne.length; i++) {
        for (let j = 0; j < arrayTwo.length; j++) {
            if (i === 0) {
                closest = Math.abs(arrayOne[i] - arrayTwo[j]);
                resArr = [arrayOne[i], arrayTwo[j]];
            } else {
                let temp = Math.abs(arrayOne[i] - arrayTwo[j]);
                if (closest > temp) {
                    closest = Math.abs(arrayOne[i] - arrayTwo[j]);
                    resArr = [arrayOne[i], arrayTwo[j]];
                }
            }
        }
    }
    return resArr;
}


// O(n*log(n)+m*log(m))
function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);
    let difference = Infinity;
    let resArr;
    let i = 0;
    let j = 0
    while (i < arrayOne.length && j < arrayTwo.length && difference !== 0) {
        let sum;
        const first = arrayOne[i];
        const second = arrayTwo[j];
        if (arrayOne[i] > arrayTwo[j]) {
            sum = arrayOne[i] - arrayTwo[j];
            j++;
        } else {
            sum = arrayTwo[j] - arrayOne[i];
            i++;
        }
        if (sum < difference) {
            difference = sum;
            resArr = [first, second];
        }
    }
    return resArr;
}


const arr1 = [-1, 5, 10, 20, 28, 3]
const arr2 = [26, 134, 135, 15, 17]


// console.log(smallestDifference(arr1, arr2))


//---------------------------------------------------------------------------------------------anagram------------------------


// O(nlog(n)*m)-time   O(n^2) - space

class AnagramHashTable {
    constructor() {
        this.table = {};
    }

    add(key, value) {
        if (this.table[key]) {
            this.table[key].push(value);
        } else {
            this.table[key] = [value];
        }
    }

    getAnagrams() {
        const result = [];
        for (let i in this.table) {
            result.push(this.table[i]);
        }
        return result;
    }
}

function groupAnagrams(words) {
    const hashTable = new AnagramHashTable();
    for (let value = 0; value < words.length; value++) {
        let key = [...words[value]]//spread operator works like split on strings
        console.log(key)
        hashTable.add(key.sort(), words[value]);
    }
    return hashTable.getAnagrams();
}


// console.log(groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]));


let s = ['dc42a31b']
let te = [...s[0]]; //spread operator works like split on strings
// console.log(te)


//-------------------------------------------------------------Longest Substring Without Duplication----------------------------


function longestSubstringWithoutDuplication(string) {
    const table = {};
    let startIndex = 0;
    let subs = [0, 1];
    for (let i = 0; i < string.length; i++) {
        if (string[i] in table) {
            startIndex = Math.max(startIndex, table[string[i]] + 1);
        }
        if (subs[1] - subs[0] < i + 1 - startIndex) {
            subs = [startIndex, i + 1];
        }
        table[string[i]] = i;
    }
    return string.slice(subs[0], subs[1]);
}


// console.log(longestSubstringWithoutDuplication("abacacacaaabacaaaeaaafa"))


//----------------------------------------------------------------------------Find Three Largest Numbers-------------------------------

function findThreeLargestNumbers(arr) {
    const result = [-Infinity, -Infinity, -Infinity];
    for (let i = 0; i < arr.length; i++) {
        let smallest = smalestInArr(result);
        if (arr[i] >= result[smallest]) {
            result[smallest] = arr[i];
        }
    }
    return result;
}

const smalestInArr = (arr) => {
    let first = arr[0] > arr[1] ? 1 : 0;
    let second = arr[2] > arr[first] ? first : 2;
    return second;
}

// console.log(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]));


//----------------------------------------------------------------------- Smallest Subsequence of Distinct Characters---------------------
//Need to fix
const smallestSubsequence = function (text) {
    const set = new Set();
    for (let i = 0; i < text.length; i++) {
        if (set.has(text[i])) {
            set.delete(text[i]);
        }
        set.add(text[i]);
    }
    const setVals = set.values();
    let lemp = setVals.next().value;
    let newStr = '';
    while (lemp) {
        newStr += lemp
        lemp = setVals.next().value;
    }
    return newStr;
};

// console.log(smallestSubsequence("leetcode"));


//----------------------------------------------------------------Majority Element------------------------------------------------

const majorityElement = function (nums) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] === undefined) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]] += 1;
        }
    }
    const keys = Object.keys(map);
    let res = keys[0];
    let resultComp = map[keys[0]];
    for (let i = 1; i < keys.length; i++) {
        if (map[keys[i]] > resultComp) {
            resultComp = map[keys[i]];
            res = keys[i];
        }
    }
    return res;
};

// console.log(majorityElement([6,5,5]));

//---------------------------------------------------------------------------Reverse Only Letters----------------------------
/**
 * Input: "Test1ng-Leet=code-Q!"
 Output: "Qedo1ct-eeLg=ntse-T!"
 * @param s
 */

const reverseOnlyLetters = function (s) {
    s = s.split("");
    let left = 0;
    let reverse = s.length - 1;
    const regEx = /^[A-Za-z]+$/
    while (reverse > left) {
        if (!regEx.exec(s[left])) {
            left++;
        } else if (!regEx.exec(s[reverse])) {
            reverse--;
        } else {
            let temp = s[reverse];
            s[reverse] = s[left];
            s[left] = temp;
            left++;
            reverse--;
        }
    }
    return s.join("");
};

const regEx = /[a-zA-Z]/gi
let test = regEx.exec("z")

// console.log('rex',!!test)
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"))













