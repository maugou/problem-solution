const { solution } = require("./coding-76.js");

// https://school.programmers.co.kr/learn/courses/30/lessons/132266

test("coding-76", () => {
    expect(
      solution(
        3,
        [
          [1, 2],
          [2, 3],
        ],
        [2, 3],
        1
      )
    ).toEqual([1, 2]);
  expect(
    solution(
      5,
      [
        [1, 2],
        [1, 4],
        [2, 4],
        [2, 5],
        [4, 5],
      ],
      [1, 3, 5],
      5
    )
  ).toEqual([2, -1, 0]);
});
