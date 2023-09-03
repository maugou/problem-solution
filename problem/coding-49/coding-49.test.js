const { solution } = require("./coding-49.js");

// https://school.programmers.co.kr/learn/courses/30/lessons/12914

test("coding-49", () => {
  expect(solution(4)).toBe(5);
  expect(solution(3)).toBe(3);
  expect(solution(5)).toBe(8);
  expect(solution(6)).toBe(13);
});
