const solution = (s) => {
  let subStringLength = [0];
  let subString = "";

  for (let index = 0; index < s.length; index++) {
    for (let i = index; i < s.length; i++) {
      if (!subString.includes(s[i])) {
        subString += s[i];
      } else {
        break;
      }
    }

    subStringLength.push(subString.length);
    subString = "";
  }

  return Math.max(...subStringLength);
};

module.exports = { solution };
