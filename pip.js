function maxHeight(wallPositions, wallHeights) {
    const arr = [];
    let mud = [];
    for (let i = 0; i < wallPositions.length; i++) {
        arr[wallPositions[i] - 1] = wallHeights[i];
    }
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            if(i===0){
                while(!arr[i]){
                    i++;
                }
                let value=arr[i]+1;
                i--;
                let j=i;
                while(j>=0){
                    arr[j]=value;
                    j--;
                    value++;
                }
            }else{
                let point = arr[i - 1] + 1;
                let j = i;
                while (!arr[j]) {
                    arr[j] = point;
                    mud.push(point);
                    point++;
                    j++;
                }
                j--;
                if ((arr[j] - arr[j + 1]) > 1) {
                    point = arr[j + 1] + 1
                    let mudPointer = mud.length - 1
                    while (j >= i) {
                        mud[mudPointer] = point
                        arr[j] = point;
                        if (arr[j - 1] - arr[j] < 2) break
                        mudPointer--;
                        j--;
                        point++;
                    }
                }
            }
            }


    }
    return Math.max(...mud);
}


// console.log(maxHeight([1,2,4,7],[4,6,8,11]))
// console.log(maxHeight([1,3,7],[4,3,3]))
console.log(maxHeight([7,12,16,22,26,29],[8,8,9,8,8,11]))//failed has to be 12
// console.log(maxHeight([1, 10], [1, 5])) //failed has to be 7


function scatterPalindrome(strToEvaluate) {
   let length=0;
   let arr=[];
   for(let i=0;i<strToEvaluate.length;i++){
       let point =i;
       while(point<strToEvaluate.length){

       }
   }
}
