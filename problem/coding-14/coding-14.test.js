const { solution1 } = require("./coding-14.js");

// https://leetcode.com/problems/search-a-2d-matrix/
test("coding-14", () => {
  expect(
    solution1(
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      3
    )
  ).toBe(true);

  expect(
    solution1(
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      13
    )
  ).toBe(false);
});
