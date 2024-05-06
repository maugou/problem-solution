const { solution } = require("./coding-65.js");

test("coding-65", () => {
  expect(solution("110010101001")).toEqual([3, 8]);
  expect(solution("01110")).toEqual([3, 3]);
  expect(solution("1111111")).toEqual([4, 1]);
});
