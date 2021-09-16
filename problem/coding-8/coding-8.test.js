const { solution } = require("./coding-8.js");

// https://leetcode.com/problems/zigzag-conversion/
test("coding-8", () => {
  expect(solution("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
  expect(solution("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
  expect(solution("A", 1)).toBe("A");
});
