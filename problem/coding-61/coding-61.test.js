const { solution } = require("./coding-61.js");

// https://school.programmers.co.kr/learn/courses/30/lessons/43164?language=javascript

test("coding-61", () => {
  expect(
    solution([
      ["ICN", "JFK"],
      ["HND", "IAD"],
      ["JFK", "HND"],
    ])
  ).toEqual(["ICN", "JFK", "HND", "IAD"]);
  expect(
    solution([
      ["ICN", "SFO"],
      ["ICN", "ATL"],
      ["SFO", "ATL"],
      ["ATL", "ICN"],
      ["ATL", "SFO"],
    ])
  ).toEqual(["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]);
  expect(
    solution([
      ["ICN", "AAA"],
      ["ICN", "CCC"],
      ["CCC", "DDD"],
      ["AAA", "BBB"],
      ["AAA", "BBB"],
      ["DDD", "ICN"],
      ["BBB", "AAA"],
    ])
  ).toEqual(["ICN", "CCC", "DDD", "ICN", "AAA", "BBB", "AAA", "BBB"]);
});
