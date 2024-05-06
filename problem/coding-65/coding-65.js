const solution = (s) => {
  let currentS = s;
  let deletionCount = 0;
  let count = 0;

  const deleteZero = (string) => {
    return string.replaceAll("0", "");
  };

  while (currentS !== "1") {
    count++;
    const newS = deleteZero(currentS);
    deletionCount += currentS.length - newS.length;

    currentS = newS;
    currentS = currentS.length.toString(2);
  }

  return [count, deletionCount];
};

module.exports = { solution };
