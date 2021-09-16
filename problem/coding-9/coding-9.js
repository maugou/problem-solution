const solution = (height) => {
  let startIndex = 0;
  let endIndex = height.length - 1;

  let result = 0;
  for (let i = 0; i < height.length - 1; i++) {
    const area =
      Math.min(height[startIndex], height[endIndex]) * (endIndex - startIndex);

    if (result < area) result = area;

    if (height[startIndex] < height[endIndex]) {
      startIndex++;
    } else {
      endIndex--;
    }
  }

  return result;
};

module.exports = { solution };
