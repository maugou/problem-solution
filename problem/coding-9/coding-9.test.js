const { solution } = require("./coding-9.js");

// https://leetcode.com/problems/container-with-most-water/
test("coding-9", () => {
  expect(solution([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  expect(solution([4, 3, 2, 1, 4])).toBe(16);
  expect(solution([1, 2, 1])).toBe(2);
});
