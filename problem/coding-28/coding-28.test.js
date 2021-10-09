const { solution } = require("./coding-28.js");

// https://leetcode.com/problems/reverse-integer/
test("conding-28", () => {
  expect(solution(123)).toBe(321);
  expect(solution(-123)).toBe(-321);
  expect(solution(120)).toBe(21);
  expect(solution(0)).toBe(0);
});
