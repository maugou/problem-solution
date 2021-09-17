const solution = (num) => {
  const number = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  const roman = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M",
  ];

  let result = "";
  for (let i = number.length; i >= 0; i--) {
    const quotient = Math.floor(num / number[i]);

    if (quotient >= 1) {
      result += roman[i].repeat(quotient);
      num = num % number[i];
    }
  }

  return result;
};

module.exports = { solution };
