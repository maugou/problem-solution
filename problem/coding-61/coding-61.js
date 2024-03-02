const solution = (tickets) => {
  let pathGroup = [];

  const travel = (remainedTickets, currentPath) => {
    if (remainedTickets.length === 0) {
      pathGroup.push(currentPath);
      return;
    }

    remainedTickets.forEach((ticket, i) => {
      if (ticket[0] === currentPath[currentPath.length - 1]) {
        const copiedTickets = remainedTickets.slice();
        const copiedPath = currentPath.slice();

        copiedTickets.splice(i, 1);
        copiedPath.push(remainedTickets[i][1]);

        travel(copiedTickets, copiedPath);
      }
    });

    return;
  };

  travel(tickets, ["ICN"]);

  pathGroup.sort((a, b) => {
    if (a < b) {
      return -1;
    }

    if (a > b) {
      return 1;
    }

    return 0;
  });

  return pathGroup[0];
};

module.exports = { solution };
