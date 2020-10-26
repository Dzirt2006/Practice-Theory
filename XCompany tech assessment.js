function priceCheck(products, productPrices, productSold, soldPrice) {
    const priceMap = new Map();
    let count = 0;

    for (let i = 0; i < products.length; i++) {
        priceMap.set(products[i], productPrices[i]);
    }

    for (let i = 0; i < productSold.length; i++) {
        let compare = priceMap.get(productSold[i]) === soldPrice[i];
        if (!compare) count++;
    }

    return count;
}

const products = ['rice', 'sugar', 'wheat', 'cheese']
const productPrices = [16.89, 56.92, 20.89, 345.99]
const productSold = ['rice', 'cheese']
const soldPrice = [18.99, 400.89]

//---------------------------------------------------------------------

// function barterMarket(comicBooks, coins, coinsNeeded, coinsOffered) {
//     if (comicBooks < 2 && coins < coinsNeeded) return 0;
//     if (coins < coinsNeeded && comicBooks > 1) {
//         comicBooks--;
//         coins += coinsOffered;
//         return barterMarket(comicBooks, coins, coinsNeeded, coinsOffered);
//     }else if (coins >= coinsNeeded && comicBooks > 0) {
//         let fictionBook=0;
//         while(coins >= coinsNeeded && comicBooks > 0){
//             coins-=coinsNeeded;
//             comicBooks--;
//             fictionBook++;
//         }
//         if(comicBooks>1){
//             return fictionBook+barterMarket(comicBooks,coins,coinsNeeded,coinsOffered);
//         }else{
//             return fictionBook
//         }
//     }
// }

function barterMarket(comicBooks, coins, coinsNeeded, coinsOffered) {
    if (comicBooks < 2 && coins < coinsNeeded) return 0;
    let trigger=true;
    let fictionBooks=0;
    while(trigger){
        if (coins < coinsNeeded && comicBooks > 1) {
        comicBooks--;
        coins += coinsOffered;
        } else if(coins >= coinsNeeded && comicBooks > 0){
            coins-=coinsNeeded;
            comicBooks--;
            fictionBooks++;
        }   else trigger=false;
    }
    return fictionBooks;
}


///---------------------------------------------------------------------------------------------------------
/** remove node greater than x
 *
 * @param listHead
 * @param x
 * @returns {*}
 */

function removeNodes(listHead, x) {
    let final=listHead;
    let prev;
    let pointer=final;
    while(pointer!==null){
        if(pointer.data>x){
            if(prev && pointer.next){
                prev.next=pointer.next;
                pointer=pointer.next;
            }else if(!prev){
                listHead=pointer.next;
                pointer=pointer.next;
            }else{
                prev.next=undefined;
                break;
            }
        }else{
            prev=pointer;
            pointer=pointer.next;
        }
    }
    return listHead
}


//---------------------------------------------------------------------------------------------------------------
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
// console.log(maxHeight([7,12,16,22,26,29],[8,8,9,8,8,11]))//failed has to be 12
// console.log(maxHeight([1, 10], [1, 5])) //failed has to be 7

//-------------------------------------------------------------------------------------------------------------------------------------
function scatterPalindrome(strToEvaluate) {
    let length=0;
    let arr=[];
    for(let i=0;i<strToEvaluate.length;i++){
        let point =i;
        while(point<strToEvaluate.length){

        }
    }
}
//-----------------------------------------------------------------------------------------------------------------------------------

