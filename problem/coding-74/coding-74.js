const solution = (s) => {
  const string = s.substring(2, s.length - 2);
  const array = string.split("},{").map((value) => value.split(","));
  array.sort((a, b) => a.length - b.length);

  const result = [];

  const findNumber = (values) => {
    const value = values.find((value) => !result.includes(value));

    result.push(value);
  };

  array.forEach((values) => findNumber(values));

  return result.map((value) => Number(value));
};

module.exports = { solution };
