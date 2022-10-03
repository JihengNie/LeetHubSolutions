/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    var xString = x.toString()
    var oddCounter = 0;
    for (var i = 0; i < Math.floor(xString.length/2); i++) {
        if (xString[i] !== xString[xString.length - 1 - i]) {
            return false
        }
    }
    return true
};