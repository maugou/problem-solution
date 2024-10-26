const { solution } = require("./coding-71.js");

// https://school.programmers.co.kr/learn/courses/30/lessons/64064

test("coding-61", () => {
  expect(
    solution(
      ["frodo", "fradi", "crodo", "abc123", "frodoc"],
      ["fr*d*", "abc1**"]
    )
  ).toBe(2);
  expect(
    solution(
      ["frodo", "fradi", "crodo", "abc123", "frodoc"],
      ["*rodo", "*rodo", "******"]
    )
  ).toBe(2);
  expect(
    solution(
      ["frodo", "fradi", "crodo", "abc123", "frodoc"],
      ["fr*d*", "*rodo", "******", "******"]
    )
  ).toBe(3);
});
