/**
 * The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
 * Given two integers x and y, calculate the Hamming distance.
 * Note:
 * 0 ≤ x, y < 231.
 * Example:
 * Input: x = 1, y = 4
 * Output: 2
 * Explanation:
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 *        ↑   ↑
 * The above arrows point to positions where the corresponding bits are different.
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let s1 = x.toString(2), s2 = y.toString(2), diff = Math.abs(s1.length - s2.length),res = 0;
    if(s1.length > s2.length){
        for(let i = 0;i < diff;i++){
            s2 = '0' + s2;
        }
    } else if (s1.length < s2.length){
        for(let j = 0;j < diff;j++){
            s1 = '0' + s1;
        }
    }
    for(let k = 0;k < s1.length;k++){
        if(s1.charAt(k)!=s2.charAt(k)){
            res++;
        }
    }
    return res;
};
