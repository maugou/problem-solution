const { solution } = require("./coding-62.js");

// https://school.programmers.co.kr/learn/courses/30/lessons/118667

test("coding-62", () => {
  expect(solution([3, 2, 7, 2], [4, 6, 5, 1])).toBe(2);
  expect(solution([1, 2, 1, 2], [1, 10, 1, 2])).toBe(7);
  expect(solution([1, 1], [1, 5])).toBe(-1);
});
