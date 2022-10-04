/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var conversion = {"I": 1, "V":5,"X":10,"L":50,"C":100,"D":500,"M":1000};
    var result = 0;
    
    for (var i = 0; i < s.length; i++) {
        result += conversion[s[i]];
        if (i > 0 && conversion[s[i]] > conversion[s[i - 1]]) 
            result -= 2 * conversion[s[i - 1]];
    }
    return result;
};