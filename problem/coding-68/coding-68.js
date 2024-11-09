const solution = (n) => {
  const array = Array.from({ length: n }, (value, index) =>
    Array.from({ length: index + 1 }, () => null)
  );

  const length = array.reduce((acc, cur) => {
    return acc + cur.length;
  }, 0);

  // let topIndex = 0; // 채워야할 가장 위 칸 index
  let bottomIndex = n - 1; // 채워야할 가장 아래 칸 index
  let rightLength = n - 1; // 오른쪽으로 가야할 거리

  let verticalIndex = 0; // 상하 index
  let horizontalIndex = 0; // 좌우 index

  let direction = 1; // 상하 방향 ( 1일 경우 아래로, -1일 경우 위로 )

  for (let i = 1; i <= length; i++) {
    // 도착한 곳이 null 이면 숫자 채우기
    if (array[verticalIndex][horizontalIndex] === null) {
      array[verticalIndex].splice(horizontalIndex, 1, i);

      // 위,아래로 움직일지 결정
      if (verticalIndex < bottomIndex) {
        const nextVerticalIndex = verticalIndex + direction;

        if (
          array[nextVerticalIndex][horizontalIndex - 1] !== null &&
          direction === -1
        ) {
          direction *= -1; // 방향 바꾸기
          bottomIndex--;
        }

        if (direction === -1) {
          horizontalIndex--;
        }

        verticalIndex += direction;

        continue;
      }

      // 오른쪽으로 움직일지 결정
      if (verticalIndex === bottomIndex && horizontalIndex < rightLength) {
        horizontalIndex++;

        continue;
      }

      // 채워야할 공간의 가장 오른쪽 아래 위치 할 경우 방향 전환
      if (verticalIndex === bottomIndex && horizontalIndex === rightLength) {
        direction *= -1; // 방향 바꾸기
        verticalIndex += direction; // 상하 위치 조정
        horizontalIndex--; // 좌우 간격 좁히기

        rightLength -= 2;
      }
    }
  }

  return array.flat();
};

module.exports = { solution };
