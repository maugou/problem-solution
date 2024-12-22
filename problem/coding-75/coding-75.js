const solution = (k, d) => {
  const maxLength = d ** 2;

  /* 점을 찍을 수 있는 point */
  const numbers = [0];
  while (numbers[numbers.length - 1] < d) {
    numbers.push(numbers.length * k);
  }

  let result = 0;

  for (let i = 0; i < numbers.length; i++) {
    const x = numbers[i];

    let leftIndex = 0;
    let rightIndex = numbers.length - 1;
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    while (leftIndex <= rightIndex) {
      const y = numbers[middleIndex];

      if (x ** 2 + y ** 2 <= maxLength) {
        leftIndex = middleIndex + 1;
        middleIndex = Math.floor((leftIndex + rightIndex) / 2);
      } else {
        rightIndex = middleIndex - 1;
        middleIndex = Math.floor((leftIndex + rightIndex) / 2);
      }
    }

    result += middleIndex + 1;
  }

  return result;
};

module.exports = { solution };
