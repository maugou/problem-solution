const solution = (genres, plays) => {
  const data = genres.reduce((acc, cur, index) => {
    if (acc[cur]) {
      acc[cur].nativeNumber.push(index);
      acc[cur].playCount += plays[index];
    } else {
      acc[cur] = {
        nativeNumber: [index],
        playCount: plays[index],
      };
    }

    return acc;
  }, {});

  return Object.values(data)
    .sort((a, b) => b.playCount - a.playCount)
    .map((a) => a.nativeNumber.sort((a, b) => plays[b] - plays[a]).slice(0, 2))
    .reduce((acc, cur) => acc.concat(cur));
};

module.exports = { solution };
