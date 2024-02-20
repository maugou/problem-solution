const solution = (s) => {
  const numbers = s.split(" ").map((stingNumber) => Number(stingNumber));

  return `${Math.min(...numbers)} ${Math.max(...numbers)}`;
};

module.exports = { solution };
``;
