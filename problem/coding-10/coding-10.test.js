const { solution } = require("./coding-10.js");

// https://leetcode.com/problems/integer-to-roman/
test("coding-10", () => {
  expect(solution(3)).toBe("III");
  expect(solution(4)).toBe("IV");
  expect(solution(9)).toBe("IX");
  expect(solution(58)).toBe("LVIII");
});
