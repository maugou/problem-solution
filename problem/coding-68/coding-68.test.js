const { solution } = require("./coding-68.js");

// https://school.programmers.co.kr/learn/courses/30/lessons/68645?language=javascript

test("coding-66", () => {
  expect(solution(4)).toEqual([1, 2, 9, 3, 10, 8, 4, 5, 6, 7]);
  expect(solution(5)).toEqual([
    1, 2, 12, 3, 13, 11, 4, 14, 15, 10, 5, 6, 7, 8, 9,
  ]);
  expect(solution(6)).toEqual([
    1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11,
  ]);
});

