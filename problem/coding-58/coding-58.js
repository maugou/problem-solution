const solution = (begin, target, words) => {
  if (!words.includes(target)) return 0;

  const result = [];
  const convertWord = (word, remainingWords, count) => {
    if (remainingWords.length === 0 || word === target) {
      return count;
    }

    for (let i = 0; i < word.length; i++) {
      // 시작 단어 배열화
      const splittedWord = word.split("");
      splittedWord.splice(i, 1); // i번째 알파벳 제거

      for (let j = 0; j < remainingWords.length; j++) {
        // 변환 가능한 단어들 배열화
        const convertedRemainingWords = remainingWords
          .slice()
          .map((word) => word.split(""));

        convertedRemainingWords[j].splice(i, 1); // 시작 단어에서 제거한 자리와 동일하게 만들기

        if (convertedRemainingWords[j].join("") === splittedWord.join("")) {
          const resultCount = convertWord(
            remainingWords[j], // 변경할 단어
            remainingWords.filter((value) => value !== remainingWords[j]), // 변경한 단어 제외
            count + 1 // 변경한 횟수
          );
          if (resultCount !== undefined) {
            result.push(resultCount);
          }
        }
      }
    }
  };

  convertWord(begin, words, 0);

  return Math.min(...result);
};

module.exports = { solution };
