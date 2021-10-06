const { solution } = require("./coding-25.js");

// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
test("coding-25", () => {
  expect(solution([3, 4, 5, 1, 2])).toBe(1);
  expect(solution([4, 5, 6, 7, 0, 1, 2])).toBe(0);
  expect(solution([11, 13, 15, 17])).toBe(11);
});
