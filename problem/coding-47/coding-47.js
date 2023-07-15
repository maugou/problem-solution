const solution = (n, s) => {
  const elements = [];
  let currentS = s;

  for (let i = n; i > 0; i--) {
    const element = Math.ceil(currentS / i);

    elements.push(element);

    currentS = Math.max(currentS - element, 0);
  }

  elements.sort((a, b) => a - b);

  return elements.includes(0) ? [-1] : elements;
};

module.exports = { solution };
