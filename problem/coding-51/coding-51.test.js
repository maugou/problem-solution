const { solution } = require("./coding-51.js");

// https://school.programmers.co.kr/learn/courses/30/lessons/131127

test("coding-51", () => {
  expect(
    solution(
      ["banana", "apple", "rice", "pork", "pot"],
      [3, 2, 2, 2, 1],
      [
        "chicken",
        "apple",
        "apple",
        "banana",
        "rice",
        "apple",
        "pork",
        "banana",
        "pork",
        "rice",
        "pot",
        "banana",
        "apple",
        "banana",
      ]
    )
  ).toBe(3);
  expect(
    solution(
      ["apple"],
      [10],
      [
        "banana",
        "banana",
        "banana",
        "banana",
        "banana",
        "banana",
        "banana",
        "banana",
        "banana",
        "banana",
      ]
    )
  ).toBe(0);
});
