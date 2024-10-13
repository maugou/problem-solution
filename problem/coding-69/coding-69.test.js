const { solution } = require("./coding-69.js");

// https://school.programmers.co.kr/learn/courses/30/lessons/152995

test("coding-69", () => {
  expect(
    solution([
      [2, 2],
      [1, 4],
      [3, 2],
      [3, 2],
      [2, 1],
    ])
  ).toBe(4);
});
