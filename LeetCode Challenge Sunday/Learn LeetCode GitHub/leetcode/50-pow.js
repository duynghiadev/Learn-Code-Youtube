/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n === 0){
        return 1;
    }
    if(n === 1){
        return x;
    }
    let factor = n < 0 ? true : false;
    
    if(factor){
        n = -n;
    }
    
    let n1 = parseInt(n / 2), 
        n2 = n - n1*2;
    
    let pow1 = myPow(x, n1);
    let pow2 = myPow(x, n2);
    
    return factor? 1/(pow1 * pow1 * pow2) : (pow1 * pow1 * pow2);
};
