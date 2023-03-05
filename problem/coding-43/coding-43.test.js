const { solution } = require("./coding-43.js");

// https://school.programmers.co.kr/learn/courses/30/lessons/1845?language=javascript

test("coding-43", () => {
  expect(solution([3, 1, 2, 3])).toBe(2);
  expect(solution([3, 3, 3, 2, 2, 4])).toBe(3);
  expect(solution([3, 3, 3, 2, 2, 2])).toBe(2);
});
