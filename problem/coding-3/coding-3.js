const solution = (citations) => {
  let result = 0;
  for (let i = citations.length; i >= citations.length / 2; i--) {
    if (citations.filter((value) => value >= i).length >= i) {
      result = i;
      break;
    }
  }

  return result;
};

module.exports = { solution };
