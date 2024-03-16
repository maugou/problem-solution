const { solution } = require("./coding-63.js");

// https://school.programmers.co.kr/learn/courses/30/lessons/12980?language=javascript

test("coding-62", () => {
  expect(solution(5)).toBe(2);
  expect(solution(6)).toBe(2);
  expect(solution(5000)).toBe(5);
});
