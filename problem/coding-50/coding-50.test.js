const { solution } = require("./coding-50.js");

// https://school.programmers.co.kr/learn/courses/30/lessons/154538

test("coding-50", () => {
  expect(solution(10, 40, 5)).toBe(2);
  expect(solution(10, 40, 30)).toBe(1);
  expect(solution(2, 5,4)).toBe(-1);
});
