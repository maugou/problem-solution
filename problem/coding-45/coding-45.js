const solution = (s) => {
  const startString = ["[", "{", "("];
  const closeString = ["]", "}", ")"];
  const splitS = s.split("");
  const impossibleRotationS = [];

  // 회전 후 양끝이 닫혀있는 S 선별
  for (let i = 0; i < splitS.length; i++) {
    const allRotationsS = [
      splitS.slice(i, splitS.length),
      splitS.slice(0, i),
    ].flat();

    if (
      !closeString.includes(allRotationsS[0]) &&
      !startString.includes(allRotationsS[allRotationsS.length - 1])
    ) {
      impossibleRotationS.push(allRotationsS);
    }
  }

  // 닫는 문자열 기준으로 mapping 할 객체 생성
  const mappingGroup = closeString.reduce((acc, cur, index) => {
    acc[cur] = startString[index];

    return acc;
  }, {});

  let pairCount = 0;
  const checkPair = (currentS) => {
    if (currentS.length === 0) {
      pairCount++;
      return;
    }

    const lastIndex = currentS.length - 1;

    if (startString.includes(currentS[lastIndex])) {
      return;
    }

    for (let i = lastIndex; i > 0; i--) {
      const startStr = mappingGroup[currentS[i]];
      if (currentS[i - 1] === startStr) {
        currentS.splice(i - 1, 2);
        checkPair(currentS);

        break;
      }
    }
  };

  impossibleRotationS.forEach((item) => {
    if (item.length % 2 === 0) {
      checkPair(item);
    }
  });

  return pairCount;
};

module.exports = { solution };
