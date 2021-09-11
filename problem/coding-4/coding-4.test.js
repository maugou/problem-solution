const { solution } = require("./coding-4.js");

// https://leetcode.com/problems/add-two-numbers/
test("example", () => {
  expect(solution([2, 4, 3], [5, 6, 4])).toStrictEqual([7, 0, 8]);
  expect(solution([0], [0])).toStrictEqual([0]);
  expect(solution([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])).toStrictEqual([
    8, 9, 9, 9, 0, 0, 0, 1,
  ]);
});
