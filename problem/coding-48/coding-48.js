const solution = (today, terms, privacies) => {
  const basicMonthCount = 12;

  const termsCollection = terms.reduce((acc, cur) => {
    const item = cur.split(" ");

    return { ...acc, [item[0]]: Number(item[1]) };
  }, {});

  const currentPrivaciesGroup = privacies.map((item) => {
    const dividedPrivacies = item.split(" ");

    const startDateGroup = dividedPrivacies[0]
      .split(".")
      .map((item) => Number(item));

    const monthValue = startDateGroup[1] + termsCollection[dividedPrivacies[1]];

    const month = monthValue % basicMonthCount;
    const year = Math.floor(monthValue / basicMonthCount) + startDateGroup[0];
    const day = startDateGroup[2];

    if (month === 0) {
      return new Date(`${year - 1}.${basicMonthCount}.${day}`);
    }

    return new Date(`${year}.${month}.${day}`);
  });

  let result = [];
  const todayDate = new Date(today);

  currentPrivaciesGroup.forEach((item, index) => {
    if (item <= todayDate) {
      result.push(index + 1);
    }
  });

  return result;
};

module.exports = { solution };
