const { solution } = require("./coding-57.js");

// https://school.programmers.co.kr/learn/courses/30/lessons/154540

test("coding-57", () => {
  expect(solution(["X591X", "X1X5X", "X231X", "1XXX1"])).toEqual([1, 1, 27]);
  expect(solution(["XXX", "XXX", "XXX"])).toEqual([-1]);
});
