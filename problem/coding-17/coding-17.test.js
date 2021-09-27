const { solution } = require("./coding-17.js");

// https://leetcode.com/problems/subsets/
test("coding-17", () => {
  expect(solution([1, 2, 3])).toStrictEqual([
    [],
    [1],
    [2],
    [1, 2],
    [3],
    [1, 3],
    [2, 3],
    [1, 2, 3],
  ]);
});
