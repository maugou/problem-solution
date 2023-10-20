const solution = (n, a, b) => {
  let nextA = Math.min(a, b);
  let nextB = Math.max(a, b);
  let roundNumber = 1;

  while (n > roundNumber) {
    if (nextA + 1 === nextB && nextB % 2 === 0) {
      break;
    }

    nextA = Math.round(nextA / 2);
    nextB = Math.round(nextB / 2);

    roundNumber++;
  }

  return roundNumber;
};

module.exports = { solution };
