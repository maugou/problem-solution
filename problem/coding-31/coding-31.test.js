const { solution } = require("./coding-31.js");

// https://leetcode.com/problems/3sum-closest/submissions/
test("coding-31", () => {
  expect(solution([-1, 2, 1, -4], 1)).toBe(2);
  expect(solution([0, 0, 0], 1)).toBe(0);
});
