/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
 
    let ss = s.trim().replace(/\s+/g, ' ').split(' ');
       let l=0,r=ss.length-1;
    while(l<r){
        let temp = ss[l];
        ss[l] = ss[r];
        ss[r] = temp;
        l++
        r--
    }
    return ss.join(' ');
};