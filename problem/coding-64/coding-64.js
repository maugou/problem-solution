const solution = (orders, course) => {
  const combinations = [];

  /* 모든 조합 구하기 */
  const getCombination = (newOrder, order, number) => {
    if (newOrder.length === number) {
      const combination = newOrder.split("");
      combination.sort();

      combinations.push(combination.join(""));
      return;
    }

    for (let i = 0; i < order.length; i++) {
      getCombination(newOrder.concat(order[i]), order.slice(i + 1), number);
    }
  };

  /* 주문에서 course 수만큼 나올 조합 구하기 */
  orders.forEach((order) => {
    course.forEach((number) => {
      if (order.length >= number) {
        getCombination("", order, number);
      }
    });
  });

  /* 조합된 코스별 주문수 */
  const combinationsCount = combinations.reduce((acc, cur) => {
    return acc[cur] ? { ...acc, [cur]: acc[cur] + 1 } : { ...acc, [cur]: 1 };
  }, {});

  /* 주문수가 2건 이상일 경우만 */
  const currentCombinations = Object.keys(combinationsCount).filter(
    (combination) => combinationsCount[combination] > 1
  );

  const result = [];
  /* 코스 중에 가장 많이 주문한 건수만 골라내기 */
  course.forEach((number) => {
    const filteredOrder = currentCombinations.filter(
      (combination) => combination.length === number
    );

    const maxOrderCount = Math.max(
      ...filteredOrder.map((key) => combinationsCount[key])
    );

    filteredOrder.forEach((order) => {
      if (combinationsCount[order] === maxOrderCount) {
        result.push(order);
      }
    });
  });

  result.sort();

  return result;
};

module.exports = { solution };
