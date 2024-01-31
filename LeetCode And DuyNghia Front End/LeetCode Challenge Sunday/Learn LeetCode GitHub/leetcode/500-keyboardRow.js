/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let keyboard = ['qwertyuiop', 'asdfghjkl','zxcvbnm'];
    let result =[];
    words.forEach(function(word){
        let temp = new Set();
        for(let letter of word){
            for(let j = 0;j < 3;j++){
                if(keyboard[j].indexOf(letter) != -1){
                    temp.add(j);
                }
            }
        }
        if(temp.size === 1){
            result.push(word);
        }
    });
    return result;
};
