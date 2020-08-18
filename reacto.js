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

var isPalindrome = function(x) {
    if(x<0)return false
    let temp=x;
    let pol=0;
    while(temp){
        let temp1=temp%10/10;
            pol=(pol+temp1)*10;
            temp=temp/10|0;
        }
    return (pol === x);
};

// console.log(isPalindrome(10))

//---------------------------------------------------------------------------------------------------------------------------
const prSum=[5, 2, [7, -1], 3, [6, [-13, 8], 4]];

function productSum(array) {
    return summHelper(array,2);
}


const summHelper=(arr,int)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        if(typeof arr[i]==="object"){
            sum+=(int*(summHelper(arr[i],(int+1))))

        }else{
            sum+=arr[i]
        }
    }

    return sum;
}

// console.log(productSum(prSum))


//------------------------------------------------------------------------------------------------------------------


function shortenPath(path) {
    const stack=[];
    if(path[0]==='/') stack.push('')
    let arr=path.split('/').filter(x=>(x!=='' && x!=='.'))
    for(let i=0;i<arr.length;i++){
            if(arr[i]==='..'){
                if(stack[stack.length-1]==='..' || stack.length===0 ) {
                    stack.push(arr[i])
                }else if(stack[stack.length-1]!=='') {
                    stack.pop();
                }
            }else{
                stack.push(arr[i]);
            }
    }
    if(stack.length===1 && stack[0]===''){
        return '/'
    }else {
        return stack.join('/');
    }
}


// console.log(shortenPath("/../../foo/bar/baz"))



//------------------------------------------------------------------------------------------------------------------

const palinStr="it's highnoon";

function longestPalindromicSubstring(str) {

   console.log(arr.indexOf('n'))
}



// console.log(longestPalindromicSubstring(palinStr))

//------------------------------------------------------------------------------------------------------------------


function balancedBrackets(str) {
    const stack=[];
    const arr=['[','{','(',']','}',')'];
    for(let i=0;i<str.length;i++){

        if(opening(str[i])){
            stack.push(str[i]);
        }else{
            const top=stack[stack.length-1]
            if(closing(top,str[i])){
                stack.pop();
            }else {
                if (!arr.includes(str[i])) {
                    continue;
                } else {
                    return false;
                }
            }
        }
    }

    return stack.length===0;
}

const closing=(char1,char2)=>{
    const map={'{':'}','[':']','(':')'};
    return map[char1]===char2;
}

const opening=char=>{
    const arr=['[','{','('];
    return arr.includes(char);
}


// console.log(balancedBrackets("([])(){}(()()())"));


//------------------------------------------------------------------------------------------------------------------


let reverse = function(n) {
    let digit, result = 0

    while( n ){
        digit = n % 10                  //  Get last digit. Ex. 123/10 → 12.3 → 3
        result = (result * 10) + digit  //  Ex. 123 → 1230 + 4 → 1234
        n = n/10|0                      //  Remove last digit. Ex. 123 → 12.3 → 12
    }
    if(result>(Math.pow(2,32))){
        result=0;
    }
    return result
};



//------------------------------------------------------------------------------------------------------------------

function longestPalindromicSubstring(str) {
    if(str.length===1) return str
    let result='';
    for(let i=0;i<str.length;i++){
        let startIndex=i;
        let endIndex=str.length-1;
        let temp='';
        let bool=false;
        while(startIndex<=endIndex){

           if(!bool && str[startIndex]===str[endIndex]){
                bool=true;
                temp=endIndex;
                startIndex++;
                endIndex--;
               console.log( 'in bool',temp)
            }else if(!bool && str[startIndex]!==str[endIndex]){
                endIndex--;
            }else if(bool && str[startIndex]===str[endIndex]){
                startIndex++;
                endIndex--;
            }else if(bool && str[startIndex]!==str[endIndex]){
                temp='';
                startIndex=i;
                bool=false;
            }

        }

        if(temp){
            let sub=str.substring(i,temp+1)
            console.log(temp,sub,i)
            if(sub.length>result.length){
                result=sub;
            }
        }
    }
    return result;
}



console.log(longestPalindromicSubstring("a"))










