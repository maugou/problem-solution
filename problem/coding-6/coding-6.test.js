const { solution } = require("./coding-6.js");

// https://leetcode.com/problems/median-of-two-sorted-arrays/
// 소요시간: 30분

test("coding-6", () => {
  expect(solution([1, 3], [2])).toBe(2);
  expect(solution([1, 2], [3, 4])).toBe(2.5);
  expect(solution([0, 0], [0, 0])).toBe(0);
  expect(solution([], [1])).toBe(1);
  expect(solution([3], [-2, -1])).toBe(-1);
});
