module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let skoby = bracketsConfig.reduce((acc, [key, val]) => {
    return (acc[key] = val), acc;
  }, {});

  for (let i = 0; i < str.length; i++) {
    if (Object.keys(skoby).includes(str[i])) {
      if (
        Object.values(skoby).includes(str[i]) &&
        skoby[stack[stack.length - 1]] == str[i]
      ) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    } else {
      if (stack.length == 0 || skoby[stack.pop()] !== str[i]) {
        return false;
      }
    }
  }
  return stack.length == 0;
};
