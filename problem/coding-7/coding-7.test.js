const { solution1 } = require("./coding-7.js");

// https://leetcode.com/problems/longest-palindromic-substring/
test("coding-7", () => {
  // expect(solution("babad")).toBe("bab");
  expect(solution1("ccc")).toBe("ccc");
  expect(solution1("xaabacxcabaaxcabaax")).toBe("xaabacxcabaax");
  expect(solution1("cbbd")).toBe("bb");
  expect(solution1("bb")).toBe("bb");
  expect(solution1("bananas")).toBe("anana");
});
