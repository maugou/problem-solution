const { solution } = require("./coding-19.js");

// https://leetcode.com/problems/largest-number/
test("coding-19", () => {
  expect(solution([10, 2])).toBe("210");
  expect(solution([3, 30, 34, 5, 9])).toBe("9534330");
  expect(solution([1])).toBe("1");
  expect(solution([10])).toBe("10");
});
