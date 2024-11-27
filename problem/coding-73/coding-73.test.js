const { solution } = require("./coding-73.js");

// https://school.programmers.co.kr/learn/courses/30/lessons/12979?language=javascript

test("coding-73", () => {
  expect(solution(11, [4, 11], 1)).toBe(3);
  expect(solution(16, [9], 2)).toBe(3);
});
