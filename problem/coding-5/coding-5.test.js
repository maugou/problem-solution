const { solution } = require("./coding-5.js");

// https://leetcode.com/problems/longest-substring-without-repeating-characters/
test("example", () => {
  expect(solution("abcabcbb")).toBe(3);
  expect(solution("bbbbb")).toBe(1);
  expect(solution("pwwkew")).toBe(3);
  expect(solution("")).toBe(0);
  expect(solution("adglkjwlkjlakj")).toBe(7);
  expect(solution("asijdalsjdwauho")).toBe(9);
  expect(solution(" ")).toBe(1);
});
