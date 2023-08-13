const solution = (arrayA, arrayB) => {
  // 그룹 중 가장 작은 값 찾기
  const minA = arrayA[0];
  const minB = arrayB[0];

  // 약수 구하기
  const getDivisor = (number) => {
    const divisor = [];

    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        divisor.push(i);
      }
    }

    return [...divisor, number];
  };

  // 그룹별 가장 작은 값의 약수 구한 후 뒤집기
  const divisorGroupA = getDivisor(minA);
  const divisorGroupB = getDivisor(minB);

  divisorGroupA.reverse();
  divisorGroupB.reverse();
  // 약수 중 문제 조건에 맞는 값 찾기 (그 중 가장 큰 수)
  const findNumber = (group, group1, group2) => {
    return (
      group.find((number) => {
        return (
          group1.every((item) => item % number === 0) &&
          group2.every((item) => item % number !== 0)
        );
      }) ?? 0
    );
  };

  const maxA = findNumber(divisorGroupA, arrayA, arrayB);
  const maxB = findNumber(divisorGroupB, arrayB, arrayA);

  return Math.max(maxA, maxB);
};

module.exports = { solution };
