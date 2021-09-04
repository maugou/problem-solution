const { solution } = require("./coding-4");

// 3, 6, 9 게임
test("example", () => {
  const handClap = ["3", "6", "9"];

  expect(solution(3, handClap)).toBe("짝");
  expect(solution(5, handClap)).toBe(5);
  expect(solution(33, handClap)).toBe("짝짝");
  expect(solution(36, handClap)).toBe("짝짝");
});
