/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s){
   let stack=[], valid={};
   valid['{'] = "}";
   valid['('] = ")";
   valid['['] = "]";
   
   for(let c of s){
     if(!stack.length){
       stack.push(c);
     } else {
       if(c === valid[stack[stack.length-1]]){//check the latest one in stack
         stack.pop();
       }
       else{
         stack.push(c);
       }
     }
   }
   return !stack.length;
 };
