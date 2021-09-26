const { solution } = require("./coding-16");

// https://leetcode.com/problems/3sum/
test("coding-16", () => {
  expect(solution([-1, 0, 1, 2, -1, -4])).toStrictEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);

  expect(solution([])).toStrictEqual([]);
  expect(solution([0, 0, 0])).toStrictEqual([[0, 0, 0]]);
  expect(solution([-2, 0, 0, 2, 2])).toStrictEqual([[-2, 0, 2]]);
});
