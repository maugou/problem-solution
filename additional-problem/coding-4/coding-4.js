const solution = (number, handClap) => {
  const numText = number.toString();

  const result = handClap.map((value) => {
    let count = 0;
    let checking = numText.indexOf(value);

    while (checking !== -1) {
      count++;
      checking = numText.indexOf(value, checking + 1);
    }

    return count;
  });

  const handClapCount = result.reduce((a, b) => a + b);
  return handClapCount === 0 ? number : "짝".repeat(handClapCount);
};

module.exports = { solution };
