const { solution } = require("./coding-30.js");

// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
test("coding-30", () => {
  expect(solution([5, 7, 7, 8, 8, 10], 8)).toStrictEqual([3, 4]);
});
