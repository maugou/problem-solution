function solution(number) {
  if (number > 999) {
    const unitWords = ["천", "만"];

    for (let i = 2; i > 0; i--) {
      let unitResult = number / Math.pow(10, i + 2);

      if (Math.floor(unitResult) > 0) {
        const fixedNumber = Number(unitResult.toFixed(1));

        const resultNumber = Number.isInteger(fixedNumber)
          ? fixedNumber.toFixed(0) + unitWords[i - 1]
          : fixedNumber.toString() + unitWords[i - 1] + "+";

        return resultNumber;
      }
    }
  }

  return number;
}

module.exports = { solution };
