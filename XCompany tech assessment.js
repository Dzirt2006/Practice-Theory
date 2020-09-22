function priceCheck(products, productPrices, productSold, soldPrice) {
    const priceMap=new Map();
    let count=0;

    for(let i=0;i<products.length;i++){
        priceMap.set(products[i],productPrices[i]);
    }

    for(let i=0;i<productSold.length;i++){
        let compare=priceMap.get(productSold[i])===soldPrice[i];
        if(!compare) count++;
    }

    return count;
}

const products=['rice', 'sugar', 'wheat', 'cheese']
const productPrices=[16.89, 56.92, 20.89, 345.99]
const productSold =['rice', 'cheese']
const soldPrice =[18.99, 400.89]

//---------------------------------------------------------------------

function barterMarket(comicBooks, coins, coinsNeeded, coinsOffered) {
    // Write your code here

}
