/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let per = strs[0];
    for(let i=1; i<strs.length; i++){
        while(strs[i].indexOf(per) !== 0){
            per = per.slice(0,-1);
        }
    }
    return per
};