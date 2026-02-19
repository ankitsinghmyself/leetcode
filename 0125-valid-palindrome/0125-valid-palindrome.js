/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let trimString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    return trimString === trimString.split('').reverse().join('')
};