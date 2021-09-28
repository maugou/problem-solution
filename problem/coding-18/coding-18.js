const solution = (strs) => {
  const result = strs.reduce((acc, str) => {
    const sortedStr = str.split("").sort().join("");

    if (acc[sortedStr]) {
      acc[sortedStr].push(str);
    } else {
      acc[sortedStr] = [str];
    }

    return acc;
  }, {});

  return Object.values(result);
};

module.exports = { solution };
