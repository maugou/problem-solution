const { solution } = require("./conding2.js");

test("example", () => {
  expect(
    solution(
      ["classic", "pop", "classic", "classic", "pop"],
      [500, 600, 150, 800, 2500]
    )
  ).toEqual([4, 1, 3, 0]);
});
