const { solution } = require("./coding-59.js");

// https://school.programmers.co.kr/learn/courses/30/lessons/43162

test("coding-59", () => {
  expect(
    solution(3, [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ])
  ).toBe(2);
  expect(
    solution(3, [
      [1, 1, 0],
      [1, 1, 1],
      [0, 1, 1],
    ])
  ).toBe(1);
  expect(
    solution(3, [
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [1, 0, 1, 1],
      [0, 1, 1, 1],
    ])
  ).toBe(1);
});
