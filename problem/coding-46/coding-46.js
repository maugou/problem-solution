const solution = (cacheSize, cities) => {
  const cache = [];
  let playTime = 0;

  cities.forEach((city) => {
    const lowerCase = city.toLowerCase();

    if (cache.includes(lowerCase)) {
      playTime++;

      const index = cache.findIndex((item) => item === lowerCase);
      const usedCacheItem = cache.splice(index, 1);

      cache.push(...usedCacheItem);
    } else {
      playTime += 5;

      cache.push(lowerCase);
    }

    if (cache.length > cacheSize) {
      cache.shift();
    }
  });

  return playTime;
};

module.exports = { solution };
