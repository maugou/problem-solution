const solution = (info, query) => {
  const infoGroup = info.map((item) => {
    return item.split(" ");
  });

  const queryGroup = query.map((item) => {
    return item.split(" ").filter((value) => value !== "and");
  });

  const getPassedCount = (condition) => {
    const lastIndex = condition.length - 1;
    let count = 0;

    for (let j = 0; j < infoGroup.length; j++) {
      let isPass = true;
      const item = infoGroup[j];

      for (let i = 0; i < lastIndex; i++) {
        if (condition[i] === "-") {
          continue;
        }

        if (item[i] !== condition[i]) {
          isPass = false;
          break;
        }
      }

      if (isPass && Number(item[lastIndex]) >= Number(condition[lastIndex])) {
        count++;
      }
    }

    return count;
  };

  return queryGroup.map((item) => getPassedCount(item));
};

module.exports = { solution };
