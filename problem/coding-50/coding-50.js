const solution = (x, y, n) => {
  let count = 0;

  const calculation = (group) => {
    if (group.includes(x)) {
      return;
    }

    count++;
    const currentGroup = [];

    for (let value of group) {
      if (value % 3 === 0 && value / 3 >= x) {
        currentGroup.push(value / 3);
      }

      if (value % 2 === 0 && value / 2 >= x) {
        currentGroup.push(value / 2);
      }

      if (value - n >= x) {
        currentGroup.push(value - n);
      }
    }

    if (currentGroup.length === 0) {
      count = -1;
      return;
    }

    calculation(currentGroup);
  };

  calculation([y]);
  return count;
};

module.exports = { solution };
