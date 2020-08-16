
function countPairs(numbers, k) {
  const allA=[];
  let count=0;
  //get all a numbers
  numbers.forEach(number=>{
      if(!allA.includes(number)){
          allA.push(number);
      }
  });
  for(let i=0;i<allA.length-1;i++){
      //we're interested only in next number,and we don't need to check everything from the 0 that's why j=i+1;
    for(let j=0;j<allA.length;j++){
        const summ=allA[i]+k;
        if(summ===allA[j]){
            count++
        }
    }
  }
return count;
}


// console.log(countPairs([ 1, 2, 3, 4, 5, 6 ],2))

function findSmallestDivisor(s, t) {
    let bool=false;
    let count=0;
    if(s.length%2>t.length%2){
        return -1
    }
    const len=s.length;
    for(let i=0;i<t.length/len;i++){
        const compare=t.slice(i,i+len);
        if(compare===s){
            bool=true;
        }else{
            break;
        }
    }
    if(bool){
        return count;
    }else{
        return -1;
    }
}

// console.log(findSmallestDivisor('rbrb','rbrb')) //return 2
// findSmallestDivisor('lrbb','lrbb') //return 4
// findSmallestDivisor('bcdbcdbcd','bcdbcd') //return -1




