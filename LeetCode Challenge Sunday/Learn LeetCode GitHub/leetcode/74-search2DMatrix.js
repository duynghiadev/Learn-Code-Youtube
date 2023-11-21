/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var search2DMatrix = function(matrix, target){
   if(matrix === null || matrix.length === 0){
     return false;
   }
   if(matrix[0] === null || matrix[0].length === 0){
     return false;
   }
   var row = matrix.length, column = matrix[0].length;
   var start = 0, end = row - 1;
   
   while(start + 1 < end){
     var mid = Math.floor(start + (end-start)/2);
     if(matrix[mid][0] === target){
       return true;
     } else if(matrix[mid][0] < target){
       start = mid;
     } else {
       end = mid;
     }
   }
   if(target >= matrix[end][0]){
     row = end;
   } else if (target >= matrix[start][0]){
     row = start;
   } else {
     return false;
   }
   start = 0, end = matrix[row].length - 1;
   
   while(start + 1 < end){
     var mid2 = Math.floor(start + (end - start )/2);
     if(matrix[mid2][0] === target){
       return true;
     } else if (matrix[mid2][0] > target){
       end = mid2;
     } else {
       start = mid2;
     }
   }
   
   if(matrix[row][start] === target){
     return true;
   } else if (matrix[row][end] === target){
     return true;
   }   
   return false;
 }
