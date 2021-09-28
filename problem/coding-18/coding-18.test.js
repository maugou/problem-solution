const { solution } = require("./coding-18.js");

// https://leetcode.com/problems/group-anagrams/submissions/
test("coding-18", () => {
  expect(solution(["eat", "tea", "tan", "ate", "nat", "bat"])).toStrictEqual([
    ["eat", "tea", "ate"],
    ["tan", "nat"],
    ["bat"],
  ]);

  expect(solution([""])).toStrictEqual([[""]]);

  expect(solution(["a"])).toStrictEqual([["a"]]);
});
