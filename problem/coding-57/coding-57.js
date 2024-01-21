const solution = (maps) => {
  const convertedMaps = maps.map((value) =>
    value.split("").map((str) => {
      if (str === "X") {
        return str;
      }

      return Number(str);
    })
  );

  let stayDay = 0;
  const getVisitedDays = (i, j) => {
    if (
      i < 0 ||
      j < 0 ||
      i >= convertedMaps.length ||
      j >= convertedMaps[i].length ||
      convertedMaps[i][j] === "X"
    ) {
      return null;
    }

    stayDay += convertedMaps[i][j];
    convertedMaps[i][j] = "X";

    getVisitedDays(i - 1, j); // top
    getVisitedDays(i + 1, j); // bottom
    getVisitedDays(i, j - 1); // left
    getVisitedDays(i, j + 1); // right

    return stayDay;
  };

  const daysGroup = [];
  for (let i = 0; i < convertedMaps.length; i++) {
    for (let j = 0; j < convertedMaps[i].length; j++) {
      stayDay = 0;
      const days = getVisitedDays(i, j);

      if (days === null) {
        continue;
      }

      daysGroup.push(days);
    }
  }

  daysGroup.sort((a, b) => a - b);
  return daysGroup.length === 0 ? [-1] : daysGroup;
};

module.exports = { solution };
