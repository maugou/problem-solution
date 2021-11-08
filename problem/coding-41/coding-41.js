// board 최대길이
const maxSize = 4;

// 카드 위치
const getCardPositions = (board) => {
  const cardPositions = {};

  for (let i = 0; i < maxSize; i++) {
    for (let j = 0; j < maxSize; j++) {
      const card = board[i][j];
      if (card) {
        cardPositions[card] = cardPositions[card] || [];
        cardPositions[card].push([i, j]);
      }
    }
  }

  return cardPositions;
};

// 카드 선택 순서
const getCardOrder = (basicOrder) => {
  const order = [];

  const makeCardOrder = (cards, otherOrder = []) => {
    if (cards.length === 0) {
      order.push(otherOrder);
      return;
    }

    for (let i = 0; i < cards.length; i++) {
      otherOrder.push(cards[i]);

      const newOtherOrder = [...otherOrder];
      const filterCards = cards.filter((card, idx) => idx !== i);
      makeCardOrder(filterCards, newOtherOrder);

      otherOrder.pop();
    }
  };

  makeCardOrder(basicOrder);

  return order;
};

// 카드 위치에 따른 이동 순서
const getPostionOrderFromCardOrder = (cardOrder, cardPositions) => {
  const positionOrder = [];

  const makePositionOrder = (cardNumbers, arr = []) => {
    if (cardNumbers.length === 0) {
      positionOrder.push(arr);
      return;
    }

    const [position1, position2] = cardPositions[cardNumbers[0]];
    const newCardNumbers = cardNumbers.slice(1);

    makePositionOrder(newCardNumbers, [...arr, position1, position2]);
    makePositionOrder(newCardNumbers, [...arr, position2, position1]);
  };

  for (let cardNumbers of cardOrder) {
    makePositionOrder(cardNumbers);
  }

  return positionOrder;
};

// 커서 이동 및 선택 횟수
const getMoveCount = (initPosition, order, board) => {
  let count = 0;
  const copyboard = [...board.map((arr) => [...arr])];

  for (let i = 0; i < order.length; i++) {
    const [startR, startC] = initPosition;
    const [endR, endC] = order[i];

    const moveCount = move(startR, startC, endR, endC, copyboard);

    count += moveCount;
    if (i % 2) {
      copyboard[startR][startC] = 0;
      copyboard[endR][endC] = 0;
    }

    initPosition = order[i];
  }

  return count + order.length;
};

const isMovable = (r, c) => {
  if (-1 < r && r < maxSize && -1 < c && c < maxSize) {
    return true;
  } else {
    return false;
  }
};

const ctrlMove = (r, c, movingR, movingC, board) => {
  let newR = r;
  let newC = c;

  while (board.length) {
    const nextR = newR + movingR;
    const nextC = newC + movingC;

    if (!isMovable(nextR, nextC)) {
      return [newR, newC];
    } else if (board[nextR][nextC]) {
      return [nextR, nextC];
    }

    newR = nextR;
    newC = nextC;
  }
};

const move = (startR, startC, endR, endC, board) => {
  if (startR === endR && startC === endC) return 0;

  const movingC = [1, -1, 0, 0];
  const movingR = [0, 0, 1, -1];

  const queue = [];
  const isVisited = new Array(maxSize)
    .fill()
    .map(() => new Array(maxSize).fill(false));

  queue.push([startR, startC, 0]);
  isVisited[startR][startC] = true;

  while (queue.length) {
    const [r, c, moveCount] = queue.shift();

    if (r === endR && c === endC) {
      return moveCount;
    }

    for (let i = 0; i < 4; i++) {
      let nextR = r + movingR[i];
      let nextC = c + movingC[i];

      if (isMovable(nextR, nextC) && !isVisited[nextR][nextC]) {
        isVisited[nextR][nextC] = true;
        queue.push([nextR, nextC, moveCount + 1]);
      }

      const [ctrlR, ctrlC] = ctrlMove(r, c, movingR[i], movingC[i], board);

      if (!isVisited[ctrlR][ctrlC]) {
        isVisited[ctrlR][ctrlC] = true;
        queue.push([ctrlR, ctrlC, moveCount + 1]);
      }
    }
  }

  return 0;
};

const solution = (board, r, c) => {
  let result = 0;

  // 카드 위치
  const cardPositions = getCardPositions(board);

  // 카드 선택 순서
  const basicOrder = Object.keys(cardPositions);
  const cardOrder = getCardOrder(basicOrder);

  const positionOrder = getPostionOrderFromCardOrder(cardOrder, cardPositions);

  // 순서에 맞춰 커서 움직임
  for (let order of positionOrder) {
    const count = getMoveCount([r, c], order, board);

    result = Math.min(result, count) || count;
  }

  return result;
};

module.exports = { solution };
