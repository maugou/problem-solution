const { solution } = require("./coding-60.js");

test("coding-60", () => {
  expect(solution("1 2 3 4")).toBe("1 4");
  expect(solution("-1 -2 -3 -4")).toBe("-4 -1");
  expect(solution("-1 -1")).toBe("-1 -1");
});
