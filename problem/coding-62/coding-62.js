const solution = (queue1, queue2) => {
  const getSum = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }

    return sum;
  };

  let sumQueue1 = getSum(queue1);
  let sumQueue2 = getSum(queue2);

  const initQueue1Length = queue1.length;
  const initQueue2Length = queue2.length;

  let workCount = 0;
  let queue1Index = 0;
  let queue2Index = 0;

  while (sumQueue1 !== sumQueue2) {
    if (initQueue1Length < queue1Index && initQueue2Length < queue2Index) {
      return -1;
    }

    if (sumQueue1 > sumQueue2) {
      const shiftValue = queue1[queue1Index];
      sumQueue1 -= shiftValue;
      sumQueue2 += shiftValue;

      queue1Index++;
      queue2.push(shiftValue);
    } else if (sumQueue1 < sumQueue2) {
      const shiftValue = queue2[queue2Index];
      sumQueue2 -= shiftValue;
      sumQueue1 += shiftValue;

      queue2Index++;
      queue1.push(shiftValue);
    }

    workCount++;
  }

  return workCount;
};

module.exports = { solution };
