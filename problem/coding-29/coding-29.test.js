const { solution } = require("./coding-29.js");

// https://leetcode.com/problems/next-permutation/
test("coding-29", () => {
  expect(solution([1, 2, 3])).toStrictEqual([1, 3, 2]);
  expect(solution([1, 3, 2])).toStrictEqual([2, 1, 3]);
  expect(solution([2, 3, 1])).toStrictEqual([3, 1, 2]);
  expect(solution([4, 2, 0, 2, 3, 2, 0])).toStrictEqual([4, 2, 0, 3, 0, 2, 2]);
});
