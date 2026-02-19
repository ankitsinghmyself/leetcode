/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let trimString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let start = 0;
    let end = trimString.length-1;
    while(start < end){
        if(trimString[start]===trimString[end]){
            start++;
            end--;
        }else{
            return false
        }
    }
    return true
};