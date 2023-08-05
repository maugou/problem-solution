const { solution } = require("./coding-47.js");

// https://school.programmers.co.kr/learn/courses/30/lessons/12938

test("coding-43", () => {
  expect(solution(2, 9)).toStrictEqual([4, 5]);
  expect(solution(2, 1)).toStrictEqual([-1]);
  expect(solution(2, 8)).toStrictEqual([4, 4]);
});
