const solution = (operations) => {
  const currentOperations = operations.map((operation) => operation.split(" "));

  let result = [];

  currentOperations.forEach((operation) => {
    switch (operation[0]) {
      case "I": {
        result.push(operation[1]);
        break;
      }

      default: {
        const isMax = operation[1] === "1";
        result.sort((a, b) => a - b);

        if (isMax) {
          result.pop();
        } else {
          result.shift();
        }
      }
    }
  });

  return result.length === 0
    ? [0, 0]
    : [Math.max(...result), Math.min(...result)];
};

module.exports = { solution };
