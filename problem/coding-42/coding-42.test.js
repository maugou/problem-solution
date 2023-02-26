const { solution } = require("./coding-42.js");

// https://school.programmers.co.kr/learn/courses/30/lessons/12945

test("coding-42", () => {
  expect(solution(2)).toBe(1);
  expect(solution(3)).toBe(2);
  expect(solution(4)).toBe(3);
  expect(solution(5)).toBe(5);
  expect(solution(6)).toBe(8);
  expect(solution(7)).toBe(13);
  expect(solution(8)).toBe(21);
  expect(solution(9)).toBe(34);
  expect(solution(10)).toBe(55);
  expect(solution(11)).toBe(89);
});
