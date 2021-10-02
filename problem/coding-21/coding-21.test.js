const { solution } = require("./coding-21.js");

// https://leetcode.com/problems/top-k-frequent-elements/
test("coding21", () => {
  expect(solution([1, 1, 1, 2, 2, 3], 2)).toStrictEqual([1, 2]);
  expect(
    solution(
      [
        3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4,
        7, 8, 5, 6,
      ],
      10
    )
  ).toStrictEqual([1, 2, 5, 3, 6, 7, 4, 8, 10, 11]);
});
