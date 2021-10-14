const solution = (intervals) => {
  const len = intervals.length;
  const startIndex = 0;
  const endIndex = 1;

  intervals.sort((a, b) => a[startIndex] - b[startIndex]);

  const result = [];
  for (let i = 0; i < len; i++) {
    const resultLastIndex = result.length - 1;

    if (result.length === 0) {
      result.push(intervals[i]);
    } else if (result[resultLastIndex][endIndex] >= intervals[i][startIndex]) {
      if (result[resultLastIndex][endIndex] < intervals[i][endIndex]) {
        result[resultLastIndex].pop();
        result[resultLastIndex].push(intervals[i][endIndex]);
      }
    } else {
      result.push(intervals[i]);
    }
  }

  return result;
};

module.exports = { solution };
