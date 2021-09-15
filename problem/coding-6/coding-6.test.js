const { solution1, solution2 } = require("./coding-6.js");

// https://leetcode.com/problems/median-of-two-sorted-arrays/
// 소요시간: 30분

test("coding-6", () => {
  expect(solution1([1, 3], [2])).toBe(2);
  expect(solution1([1, 2], [3, 10])).toBe(2.5);
  expect(solution1([0, 0], [0, 0])).toBe(0);
  expect(solution1([], [1])).toBe(1);
  expect(solution1([3], [-2, -1])).toBe(-1);

  expect(solution2([1, 3], [2])).toBe(2);
  expect(solution2([1, 2], [3, 4])).toBe(2.5);
  expect(solution2([0, 0], [0, 0])).toBe(0);
  expect(solution2([], [1])).toBe(1);
  expect(solution2([3], [-2, -1])).toBe(-1);
  expect(solution2([], [2, 3])).toBe(2.5);
});
