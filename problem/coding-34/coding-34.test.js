const { solution } = require("./coding-34.js");

// https://leetcode.com/problems/subsets-ii/
test("coding-34", () => {
  expect(solution([1, 2, 2])).toStrictEqual([
    [],
    [1],
    [2],
    [1, 2],
    [2, 2],
    [1, 2, 2],
  ]);
});
