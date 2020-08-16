// matrix  2x2 0-lenght 1- river
//return an arr return a river

const matrix = [
    [1, 0, 1, 0],
    [0, 1, 1, 1],
    [1, 0, 0, 1]
]
//

// const matrix = [
//     [1, 0, 0, 1, 0],
//     [1, 0, 1, 0, 0],
//     [0, 0, 1, 0, 1],
//     [1, 0, 1, 0, 1],
//     [1, 0, 1, 1, 0]
// ]
// // riverSizes(matrix)  //should return [1, 2, 2, 2, 5]


function riverSize(matrix) {
    const stack=[];
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
           const val=bounder(i,j,matrix);
           if(val>0){
               stack.push(val)
           }
        }
    }
    return stack;
}

function bounder(x,y,matrix) {
    if( !matrix || x<0 || y<0 || x>=matrix.length || y>=matrix[x].length ){
        return 0;
    }else{
        let left=0
        let right=0
        let top=0;k
        let bottom=0;
        left+=matrix[x][y-1] ? bounder(matrix[x][y-1]):0 ;
        right+=matrix[x][y+1] ? bounder(matrix[x][y+1]):0;
        top+=matrix[x+1]? bounder(matrix[x+1][y]):0;
        bottom+=matrix[x-1] ? bounder(matrix[x-1][y]):0;
        console.log(left,right,top,bottom)
        return left+right+top+bottom;
    }

}
console.log(riverSize(matrix))
 //should return [1, 1, 5]