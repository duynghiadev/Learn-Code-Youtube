/* 
  Given two strings s and t, determine if they are isomorphic.
  Two strings are isomorphic if the characters in s can be replaced to get t.
  All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.
  For example,
  Given "egg", "add", return true.
  Given "foo", "bar", return false.
  Given "paper", "title", return true.
  Note:
  You may assume both s and t have the same length.
*/
let isomorphicString = (s, t) => {
  let mapS = {}, mapT = {};
    for(let i = 0;i < s.length;i++){
      if(!mapS[s[i]] && !mapT[t[i]]){
        mapS[s[i]] = t[i];
        mapT[t[i]] = 1;//the value doesn't matter at all
      } else if(mapS[s[i]] !== t[i]){
          return false;
      }
    }
    return true;
}
