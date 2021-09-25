const { solution } = require("./coding-15.js");

// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
test("coding-15", () => {
  expect(solution("23")).toStrictEqual([
    "ad",
    "ae",
    "af",
    "bd",
    "be",
    "bf",
    "cd",
    "ce",
    "cf",
  ]);

  expect(solution("")).toStrictEqual([]);
  expect(solution("2")).toStrictEqual(["a", "b", "c"]);
});
