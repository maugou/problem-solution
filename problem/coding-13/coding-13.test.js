const { solution } = require("./coding-13.js");

// https://leetcode.com/problems/sort-colors/
test("coding-13", () => {
  expect(solution([2, 0, 2, 1, 1, 0])).toStrictEqual([0, 0, 1, 1, 2, 2]);
  expect(solution([2, 0, 1])).toStrictEqual([0, 1, 2]);
  expect(solution([0])).toStrictEqual([0]);
  expect(solution([1])).toStrictEqual([1]);
  expect(solution([2, 0, 2, 1, 1, 0])).toStrictEqual([0, 0, 1, 1, 2, 2]);
});
