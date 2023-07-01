const { solution } = require("./coding-45.js");

// https://school.programmers.co.kr/learn/courses/30/lessons/76502

test("coding-45", () => {
  expect(solution("[](){}")).toBe(3);
  expect(solution("}]()[{")).toBe(2);
  expect(solution("[)(]")).toBe(0);
  expect(solution("}}}")).toBe(0);
  expect(solution("{[}]")).toBe(0);

});
