const solution = (n) => {
  const array = Array.from({ length: n }, (value, index) =>
    Array.from({ length: index + 1 }, (v, i) => null)
  );

  const length = array.reduce((acc, cur) => {
    return acc + cur.length;
  }, 0);

  let direction = 1; // 위 아래 방향
  let currentIndex = 0; // 현재 index (층)

  let horizontalPoint = 0; // 양쪽 좁히는 포인트
  let verticalPoint = 1; // 위 아래 좁히는 포인트 (층)

  let lastArrayIndex = 0;

  for (i = 1; i <= length; i++) {
    /* 방향이 내려간 경우에 채워야할 가장 아래 층 */
    if (currentIndex === n - verticalPoint && direction === 1) {
      array[currentIndex][lastArrayIndex] = i;
      lastArrayIndex++;

      /* 해당 층에서 가로를 다 채울 경우 */
      if (lastArrayIndex === array[currentIndex].length - horizontalPoint) {
        direction *= -1; // 방향 전환
        currentIndex += direction; // 층 이동
        lastArrayIndex = horizontalPoint + 1; // 마지막 층 시작 index 초기화
      }

      continue;
    }

    /* 방향이 올라오면서 채워야할 가장 위 층 */
    if (currentIndex === verticalPoint && direction === -1) {
      array[currentIndex][array[currentIndex].length - 1 - horizontalPoint] =
        i;
      direction *= -1; // 방향 전환
      horizontalPoint++;
      verticalPoint++;
      currentIndex += direction;

      continue;
    }

    const currentPointIndex =
      direction > 0
        ? horizontalPoint
        : array[currentIndex].length - 1 - horizontalPoint;

    array[currentIndex][currentPointIndex] = i;
    currentIndex += direction;
  }

  return array.flat();
};

module.exports = { solution };
