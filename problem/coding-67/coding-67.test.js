const { solution } = require("./coding-67.js");

// https://school.programmers.co.kr/learn/courses/30/lessons/12987?language=javascript

test("coding-67", () => {
  expect(solution([5, 1, 3, 7], [2, 2, 6, 8])).toBe(3);
  expect(solution([2, 2, 2, 2], [1, 1, 1, 1])).toBe(3);
});
