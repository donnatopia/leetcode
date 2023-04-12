/**
 * @param {string} s
 * @return {string}
 */

module.exports = (s) => {
  var stack = [];

  for (var i = 0; i < s.length; i++) {
    if (s[i] === '*') {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join('');
};