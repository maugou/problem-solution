const solution = (n, roads, sources, destination) => {
  let roadObject = {};

  const updateRoadObject = (key, value) => {
    if (roadObject[key]) {
      roadObject[key].add(value);

      return;
    }

    roadObject[key] = new Set([value]);
  };

  for (let i = 0; i < roads.length; i++) {
    const leftPoint = roads[i][0];
    const rightPoint = roads[i][1];

    updateRoadObject(leftPoint, rightPoint);
    updateRoadObject(rightPoint, leftPoint);
  }

  const result = [];
  const findDestination = (points, step, passedPoints) => {
    if (step > n) {
      result.push(-1);
      return;
    }

    if (points.has(destination)) {
      result.push(step);
      return;
    }

    const currentPoints = [...points].flatMap((point) => {
      if (roadObject[point]) return [...roadObject[point]];

      return [];
    });

    findDestination(new Set(currentPoints), step + 1, passedPoints);
  };

  for (let i = 0; i < sources.length; i++) {
    if (!roadObject[sources[i]]) {
      result.push(-1);
      continue;
    }

    if (sources[i] === destination) {
      result.push(0);
      continue;
    }

    findDestination(roadObject[sources[i]], 1, new Set([]));
  }

  return result;
};

module.exports = { solution };
