const { solution } = require("./coding-23.js");

// https://leetcode.com/problems/jump-game-ii/
test("coding-23", () => {
  expect(solution([2, 3, 1, 1, 4])).toBe(2);
  expect(solution([0])).toBe(0);
  expect(solution([3, 4, 3, 1, 0, 7, 0, 3, 0, 2, 0, 3])).toBe(3);
});
