const { solution } = require("./coding-27.js");

// https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
test("coding-27", () => {
  expect(solution([2, 5, 6, 0, 0, 1, 2], 0)).toBeTruthy();
  expect(solution([2, 5, 6, 0, 0, 1, 2], 3)).toBeFalsy();
  expect(solution([1, 0, 1, 1, 1], 0)).toBeTruthy();
  expect(
    solution([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], 2)
  ).toBeTruthy();
});
