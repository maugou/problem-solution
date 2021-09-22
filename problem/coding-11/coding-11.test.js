const { solution } = require("./coding-11.js");

// https://leetcode.com/problems/string-to-integer-atoi/
test("coding-11", () => {
  expect(solution("42")).toBe(42);
  expect(solution("   -42")).toBe(-42);
  expect(solution("4193 with words")).toBe(4193);
  expect(solution("words and 987")).toBe(0);
  expect(solution("-91283472332")).toBe(-2147483648);
});
