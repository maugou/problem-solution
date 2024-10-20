const solution = (elements) => {
  const longElements = [...elements, ...elements];
  const result = new Set();

  /*
   ** @param {number} value - 현재 element
   ** @param {number} index - 현재 index 위치
   ** @param {number} point - 연속 수열 진행 수
   */
  const sumElement = (value, index, point) => {
    if (point > elements.length) {
      return;
    }

    if (!result.has(value)) {
      result.add(value);
    }

    const nextIndex = index + 1;
    const nextValue = value + longElements[nextIndex];

    sumElement(nextValue, nextIndex, point + 1);
  };

  for (let i = 0; i < elements.length; i++) {
    sumElement(elements[i], i, 1);
  }

  return result.size;
};

module.exports = { solution };
