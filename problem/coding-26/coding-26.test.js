const { solution } = require("./coding-26.js");

// https://leetcode.com/problems/jump-game/
test("coding-26", () => {
  expect(solution([2, 3, 1, 1, 4])).toBe(true);
  expect(solution([3, 2, 1, 0, 4])).toBe(false);
});
