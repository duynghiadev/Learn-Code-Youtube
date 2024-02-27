/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  var results = [];
  if(s === null || s.length === 0){
    return results;
  }
  var partition = [];
  dfs(0, s, partition, results);
  return results;
}
var dfs = function(startIndex, s, partition, results){
  if(startIndex === s.length){
    results.push(partition.slice(0));
    return;
  }
  for(let i = startIndex; i<s.length;i++){
    let sub = s.substring(startIndex, i+1);
    if(!valid(sub)){
      continue;
    }
    partition.push(sub);
    helper(i+1, s, partition, results);
    partition.pop();
  }
};
var valid = function(s){
  for(let i = 0, j = s.length - 1;i<j;i++,j--){
    if(s.charAt(i) !== s.charAt(j)){
      return false;
    }
  }
  return true;
}

