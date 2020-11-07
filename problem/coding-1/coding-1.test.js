const { finalSolution } = require("./coding-1.js");

test("example", () => {
  expect(
    finalSolution([
      ["yellow_hat", "headgear"],
      ["blue_sunglasses", "eyewear"],
      ["green_turban", "headgear"],
    ])
  ).toBe(5);

  expect(
    finalSolution([
      ["crow_mask", "face"],
      ["blue_sunglasses", "face"],
      ["smoky_makeup", "face"],
    ])
  ).toBe(3);
});
