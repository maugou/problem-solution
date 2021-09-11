const solution = (l1, l2) => {
  let numbers = [];
  for (const arr of [l1, l2]) {
    arr.reverse();
    numbers.push(Number(arr.join("")));
  }

  const sumNumber = numbers.reduce((acc, cur) => acc + cur);

  const result = sumNumber
    .toString()
    .split("")
    .map((c) => Number(c));

  result.reverse();

  return result;
};

module.exports = { solution };
