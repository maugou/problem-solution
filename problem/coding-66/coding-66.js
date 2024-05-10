const solution = (prices) => {
  const result = [];

  /* 현재 시점의 가격 Index*/
  for (let i = 0; i < prices.length; i++) {
    /* 비교할 시점의 가격 Index*/
    for (let j = i + 1; j < prices.length; j++) {
      /* 가격이 떨어지는 지점 찾기 */
      if (prices[i] > prices[j]) {
        result.push(j - i);
        break;
      }

      /* 끝까지 없을 경우 */
      if (j === prices.length - 1) {
        result.push(prices.length - 1 - i);
      }
    }
  }

  /* 마지막 가격은 시간 0 */
  result.push(0);
  return result;
};

module.exports = { solution };
