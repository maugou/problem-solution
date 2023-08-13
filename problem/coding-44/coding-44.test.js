const { solution } = require("./coding-44.js");

// https://school.programmers.co.kr/learn/courses/30/lessons/135807
test("coding-44", () => {
  expect(solution([10, 17], [5, 20])).toBe(0);
  expect(solution([10, 20], [5, 17])).toBe(10);
  expect(solution([14, 35, 119], [18, 30, 102])).toBe(7);
});
