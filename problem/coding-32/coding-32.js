const solution = (board) => {
  const len = board.length;
  const standardNum = 3;

  const row = Array(len).fill([]);
  const column = Array(len).fill([]);
  const box = Array(len).fill([]);

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (board[i][j] === ".") {
        continue;
      } else if (
        row[i].includes(board[i][j]) ||
        column[j].includes(board[i][j]) ||
        box[
          Math.floor(j / standardNum) + Math.floor(i / standardNum) * 3
        ].includes(board[i][j])
      ) {
        return false;
      } else {
        row[i] = [...row[i], board[i][j]];
        column[j] = [...column[j], board[i][j]];
        box[Math.floor(j / standardNum) + Math.floor(i / standardNum) * 3] = [
          ...box[Math.floor(j / standardNum) + Math.floor(i / standardNum) * 3],
          board[i][j],
        ];
      }
    }
  }

  return true;
};

module.exports = { solution };
