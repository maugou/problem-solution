const { solution } = require("./coding-12.js");

// https://leetcode.com/problems/divide-two-integers/
test("coding-12", () => {
  expect(solution(10, 3)).toBe(3);
  expect(solution(7, -3)).toBe(-2);
  expect(solution(0, 1)).toBe(0);
  expect(solution(1, 1)).toBe(1);
  expect(solution(-2147483648, -1)).toBe(2147483647);
  expect(solution(-2147483648, 1)).toBe(-2147483648);
  expect(solution(2, 2)).toBe(1);
});
