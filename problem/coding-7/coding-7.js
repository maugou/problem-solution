const solution1 = (s) => {
  let result = "";

  if (s.length < 2) return s;

  const getResult = (index, indexOfString) => {
    if (indexOfString !== -1) {
      const subStr = s.slice(index, indexOfString + 1);
      const length = subStr.length;

      for (let j = 0; j < length; j++) {
        if (subStr[0 + j] === subStr[indexOfString - j - index]) {
          if (result.length < length && j === length - 1) {
            result = subStr;
          }
        } else {
          break;
        }
      }

      if (indexOfString < s.length) {
        getResult(index, s.indexOf(s[index], indexOfString + 1));
      }
    } else if (result.length === 0) {
      result = s[0];
    }
  };

  for (let i = 0; i < s.length; i++) {
    const indexOfString = s.indexOf(s[i], i + 1);

    getResult(i, indexOfString);
  }

  return result;
};

module.exports = { solution1 };
