const { solution } = require("./coding-20.js");

// https://leetcode.com/problems/daily-temperatures/
test("coding-20", () => {
  expect(solution([73, 74, 75, 71, 69, 72, 76, 73])).toStrictEqual([
    1, 1, 4, 2, 1, 1, 0, 0,
  ]);
  expect(solution([30, 40, 50, 60])).toStrictEqual([1, 1, 1, 0]);
  expect(solution([30, 60, 90])).toStrictEqual([1, 1, 0]);
});
