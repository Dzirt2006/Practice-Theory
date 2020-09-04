// Write a method to replace all spaces in a string with '%20'

function urlStrings(str) {
    for (let i = 0; i < str.length; i++) {
        str = str.replace(' ', '%20');
    }
    return str;
}

//-----------------------------------------Palindrome Check-------------------------------

function isPalindrome(str) {
    // Write your code here.
    let left=0;
    let right=str.length-1
    while(left<right){
        if(str[left]!==str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true
}

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
