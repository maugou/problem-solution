const solution = (n, stations, w) => {
  /* 하나의 기지국의 유효 범위 */
  const rangePoint = w * 2 + 1;

  let result = 0;
  let startPoint = 0;

  for (let i = 0; i < stations.length; i++) {
    const prevRangeIndex = Math.max(0, stations[i] - w - 1);
    const nextRangeIndex = Math.min(n, stations[i] + w);

    result = Math.ceil((prevRangeIndex - startPoint) / rangePoint) + result;
    startPoint = nextRangeIndex;
  }

  if (startPoint < n) {
    result = Math.ceil((n - startPoint) / rangePoint) + result;
  }

  return result;
};

module.exports = { solution };
