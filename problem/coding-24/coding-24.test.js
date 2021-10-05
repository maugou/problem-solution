const { solution } = require("./coding-24.js");

// https://leetcode.com/problems/kth-largest-element-in-an-array/
test("coding-24", () => {
  expect(solution([3, 2, 1, 5, 6, 4], 2)).toBe(5);
  expect(solution([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
});
