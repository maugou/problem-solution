const { solution } = require("./coding-46.js");

// https://school.programmers.co.kr/learn/courses/30/lessons/17680

test("coding-46", () => {
  expect(
    solution(3, [
      "Jeju",
      "Pangyo",
      "Seoul",
      "NewYork",
      "LA",
      "Jeju",
      "Pangyo",
      "Seoul",
      "NewYork",
      "LA",
    ])
  ).toBe(50);
  expect(
    solution(3, [
      "Jeju",
      "Pangyo",
      "Seoul",
      "Jeju",
      "Pangyo",
      "Seoul",
      "Jeju",
      "Pangyo",
      "Seoul",
    ])
  ).toBe(21);
  expect(
    solution(2, [
      "Jeju",
      "Pangyo",
      "Seoul",
      "NewYork",
      "LA",
      "SanFrancisco",
      "Seoul",
      "Rome",
      "Paris",
      "Jeju",
      "NewYork",
      "Rome",
    ])
  ).toBe(60);
  expect(
    solution(5, [
      "Jeju",
      "Pangyo",
      "Seoul",
      "NewYork",
      "LA",
      "SanFrancisco",
      "Seoul",
      "Rome",
      "Paris",
      "Jeju",
      "NewYork",
      "Rome",
    ])
  ).toBe(52);
  expect(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"])).toBe(16);
  expect(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"])).toBe(25);
});
