const solution = (A, B) => {
  B.sort((a, b) => b - a);
  A.sort((a, b) => b - a);

  let count = 0;
  let k = 0;

  for (i = 0; i < B.length; i++) {
    if (A[A.length - 1] >= B[i]) {
      break;
    }

    for (j = k; j < A.length; j++) {
      if (B[i] > A[j]) {
        k = j + 1;
        count++;
        break;
      }
    }
  }

  return count;
};

module.exports = { solution };
