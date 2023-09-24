const solution = (want, number, discount) => {
  let result = 0;

  const wantCount = want.reduce((acc, cur, index) => {
    return { ...acc, [cur]: number[index] };
  }, {});

  for (let i = 0; i <= discount.length - 10; i++) {
    const currentDiscount = discount.slice(i, i + 10);

    const discountProductCount = currentDiscount.reduce((acc, cur) => {
      return { ...acc, [cur]: !acc[cur] ? 1 : acc[cur] + 1 };
    }, {});

    const isNeedMembership = Object.keys(wantCount).every(
      (item) => discountProductCount[item] === wantCount[item]
    );

    if (isNeedMembership) {
      result++;
    }
  }

  return result;
};

module.exports = { solution };
