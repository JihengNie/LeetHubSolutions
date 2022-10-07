/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	var result = [];
	
	for (var items of s) {
		if (items === '(')
			result.push(')');
		
		else if (items === '{')
			result.push('}');
		
		else if (items === '[')
			result.push(']');
		
		else if (result.length === 0 || result.pop() !== items)
			return false;
	}
	
	return result.length === 0;
};