const { solution } = require("./coding-36.js");

// https://leetcode.com/problems/rotate-array/
test("coding-36", () => {
  expect(solution([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([
    5, 6, 7, 1, 2, 3, 4,
  ]);
  expect(solution([1, 2, 3], 4)).toStrictEqual([3, 1, 2]);
});
