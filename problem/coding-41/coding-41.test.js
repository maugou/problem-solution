const { solution } = require("./coding-41.js");

// https://programmers.co.kr/learn/courses/30/lessons/72415
test("coding-41", () => {
  expect(
    solution(
      [
        [1, 0, 0, 3],
        [2, 0, 0, 0],
        [0, 0, 0, 2],
        [3, 0, 1, 0],
      ],
      1,
      0
    )
  ).toBe(14);
});
