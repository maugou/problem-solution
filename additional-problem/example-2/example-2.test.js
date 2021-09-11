const { solution } = require("./example-2");

test("example", () => {
  expect(solution(1200)).toBe("1.2천+");
  expect(solution(122345)).toBe("12.2만+");
  expect(solution(1000)).toBe("1천");
  expect(solution(242)).toBe(242);
  // expect(solution(30001)).toBe("3만+");
});
