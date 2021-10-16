const { solution } = require("./coding-35.js");

// https://leetcode.com/problems/single-number-ii/
test("coding-35", () => {
  expect(solution([2, 2, 3, 2])).toBe(3);
  expect(solution([0, 1, 0, 1, 0, 1, 99])).toBe(99);
});
