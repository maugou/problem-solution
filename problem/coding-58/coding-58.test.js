const { solution } = require("./coding-58.js");

// https://school.programmers.co.kr/learn/courses/30/lessons/43163?language=javascript

test("coding-58.js", () => {
  expect(
    solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
  ).toBe(4);
  expect(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"])).toBe(0);
});
