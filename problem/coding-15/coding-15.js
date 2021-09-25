const solution = (digits) => {
  const phoneButtons = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const result = [];
  const initIndex = 0;
  const initLetter = "";

  if (initIndex !== digits.length) {
    const makeCombinations = (index, letter) => {
      const buttonStr = phoneButtons[digits[index]];

      if (index === digits.length) {
        result.push(letter);
        return;
      } else {
        for (let i = 0; i < buttonStr.length; i++) {
          makeCombinations(index + 1, letter + buttonStr[i]);
        }
      }
    };

    makeCombinations(initIndex, initLetter);
  }

  return result;
};

module.exports = { solution };
