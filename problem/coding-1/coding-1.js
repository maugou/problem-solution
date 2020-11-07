const finalSolution = (clothes) => {
  const countKindOfClothes = Object.values(
    clothes.reduce((acc, cur) => {
      if (acc[cur[1]]) {
        acc[cur[1]]++;
      } else {
        acc[cur[1]] = 1;
      }
      return acc;
    }, {})
  );

  return (
    countKindOfClothes
      .map((count) => count + 1)
      .reduce((acc, cur) => acc * cur) - 1
  );
};

module.exports = { finalSolution };
