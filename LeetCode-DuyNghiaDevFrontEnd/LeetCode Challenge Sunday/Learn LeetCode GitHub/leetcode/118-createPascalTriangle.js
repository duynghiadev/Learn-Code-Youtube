/**
 * Given numRows, generate the first numRows of Pascal's triangle.
 * For example, given numRows = 5,
 * Return
 * 
 * [
 *     [1],
 *     [1,1],
 *    [1,2,1],
 *   [1,3,3,1],
 *  [1,4,6,4,1]
 * ]
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    var pascal = [];
    for(let i = 0;i < numRows;i++){
        pascal[i] = new Array(i+1);
        for(let j = 0;j < i+1;j++){
          if(j === i || j === 0){
              pascal[i][j] = 1;
          } else {
              pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j];
          }
        }
    }
    return pascal;
}
