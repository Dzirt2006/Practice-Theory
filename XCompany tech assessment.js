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
