//On my way to Techtonic!
var wordObj = {
    space: " ",
    punctuation: "!",
    letterBank: {
        pairedLetters: {one: "my", two: "ch", three: ""},
        singleLetters: {one: "t", two: "n", three: ""},
        vowels: ['a', 'e', 'i', 'o', 'u']
    },
    wordBank: {one: "way", two: "tonic"}
}


function makeSentence(){
    return wordObj.letterBank.vowels[3].toUpperCase()+wordObj.letterBank.singleLetters.two+wordObj.space+wordObj.letterBank.pairedLetters.one+wordObj.space+wordObj.wordBank.one+wordObj.space+wordObj.letterBank.singleLetters.one+
        wordObj.letterBank.vowels[3]+wordObj.space+wordObj.letterBank.singleLetters.one.toUpperCase()+wordObj.letterBank.vowels[1]+wordObj.letterBank.pairedLetters.two+wordObj.wordBank.two+wordObj.punctuation;
}
// console.log(makeSentence())


function reverseIt(myString){
let reversedString=Array.from(myString).reverse().join("");
    return reversedString
}

// console.log(reverseIt('gnirts tset'));



var listOfCities = ["denver","philadelphia","chicago","dallas","seattle"];

//feel free to use listOfCities as an argument to the pascalCase function to test your solution.

//****************
//* DO NOT ALTER ANY CODE ABOVE THIS COMMENT *
//****************

function pascalCase(cityArr){
    for(var i = 0;i < cityArr.length;i++){
        var tempArr = cityArr[i].split("");
        tempArr[0] = tempArr[0].toUpperCase();
        cityArr[i] = tempArr.join("");

    }
    return cityArr;
}

// console.log(pascalCase(listOfCities))


function reverseVowels(input) {
    const result=input.split('');
    const vowels=['a','e','i','o','u'];
    let left=0;
    let right=result.length-1;
    while(left<right){
        if(vowels.includes(result[left])){
            if(vowels.includes(result[right])){

                let temp=result[left];
                result[left]=result[right];
                result[right]=temp;
                left++;
                right--;
            }else{
                right--;
            }
        }else{
            left++;
        }
    }
    return result.join('');
}



console.log(reverseVowels('heelloo'));
















