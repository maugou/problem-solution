const solution = (n, computers) => {
  const connectedNetwork = new Set([]);
  let result = 0;

  const connectNetwork = (j, computer) => {
    if (connectedNetwork.has[j]) {
      return;
    }

    computer.forEach((value, index) => {
      if (value === 1 && !connectedNetwork.has(index)) {
        connectedNetwork.add(index);

        connectNetwork(index, computers[index]);
      }
    });
  };

  for (let i = 0; i < n; i++) {
    if (!connectedNetwork.has(i)) {
      result++;
    }
    for (let j = 0; j < computers[i].length; j++) {
      if (computers[i][j] === 1) {
        connectNetwork(j, computers[j]);
      }
    }
  }

  return result;
};

module.exports = { solution };
