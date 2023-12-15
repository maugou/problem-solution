const solution = (fees, records) => {
  const endTime = "23:59";

  const getMinute = (stringTime) => {
    const splitTime = stringTime.split(":").map((value) => Number(value));

    return splitTime[0] * 60 + splitTime[1];
  };

  const currentRecords = records.map((record) => {
    return record.split(" ").map((value, index) => {
      switch (index) {
        case 0:
          return getMinute(value);
        case 1:
          return Number(value);

        default:
          return value;
      }
    });
  });

  currentRecords.sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    }

    return a[0] - b[0];
  });

  const timeGroup = currentRecords.reduce((acc, cur, idx, array) => {
    const nextRecord = array[idx + 1] ?? [];

    if (cur[2] === "IN") {
      if (cur[1] === nextRecord[1]) {
        return {
          ...acc,
          [cur[1]]: (acc[cur[1]] ?? 0) + nextRecord[0] - cur[0],
        };
      } else {
        return {
          ...acc,
          [cur[1]]: (acc[cur[1]] ?? 0) + getMinute(endTime) - cur[0],
        };
      }
    }

    return acc;
  }, {});

  const carNumbers = Object.keys(timeGroup);

  carNumbers.sort((a, b) => a - b);

  return carNumbers.map((num) => {
    if (timeGroup[num] <= fees[0]) {
      return fees[1];
    }

    return fees[1] + Math.ceil((timeGroup[num] - fees[0]) / fees[2]) * fees[3];
  });
};

module.exports = { solution };
