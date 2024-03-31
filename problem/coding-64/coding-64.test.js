const { solution } = require("./coding-64.js");

// https://school.programmers.co.kr/learn/courses/30/lessons/72411

test("coding-64", () => {
  expect(
    solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
  ).toEqual(["AC", "ACDE", "BCFG", "CDE"]);
  expect(
    solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
  ).toEqual(["ACD", "AD", "ADE", "CD", "XYZ"]);
  expect(solution(["XYZ", "XWY", "WXA"], [2, 3, 4])).toEqual(["WX", "XY"]);
});
