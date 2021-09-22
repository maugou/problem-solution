const solution = (s) => {
  const trimStr = s.trimStart();
  const str =
    trimStr.startsWith("-") || trimStr.startsWith("+")
      ? trimStr.slice(1)
      : trimStr;

  let numStr = "";
  for (let i = 0; i < str.length; i++) {
    if (Number.isNaN(Number(str[i])) || str[i] === " ") {
      break;
    } else {
      numStr += str[i];
    }
  }

  let result = trimStr.startsWith("-") ? -Number(numStr) : Number(numStr);

  if (result > 2 ** 31 - 1) {
    result = 2 ** 31 - 1;
  } else if (result < (-2) ** 31) {
    result = (-2) ** 31;
  }

  return result;
};

module.exports = { solution };
