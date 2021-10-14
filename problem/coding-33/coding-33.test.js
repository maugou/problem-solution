const { solution } = require("./coding-33.js");

// https://leetcode.com/problems/merge-intervals/

test("coding-33", () => {
  expect(
    solution([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ])
  ).toStrictEqual([
    [1, 6],
    [8, 10],
    [15, 18],
  ]);
  expect(
    solution([
      [1, 4],
      [4, 5],
    ])
  ).toStrictEqual([[1, 5]]);
});
