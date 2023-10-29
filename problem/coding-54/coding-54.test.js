const { solution } = require("./coding-54.js");

// https://school.programmers.co.kr/learn/courses/30/lessons/42628

test("coding-54", () => {
  expect(
    solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"])
  ).toBe([0, 0]);
  expect(
    solution([
      "I -45",
      "I 653",
      "D 1",
      "I -642",
      "I 45",
      "I 97",
      "D 1",
      "D -1",
      "I 333",
    ])
  ).toBe([333, -45]);
});
