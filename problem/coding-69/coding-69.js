const solution = (scores) => {
  const noIncentiveGroup = [];

  /* 특정 사원의 index */
  for (i = 0; i < scores.length; i++) {
    /* 이미 못 받는 그룹일 경우 */
    if (noIncentiveGroup.includes[i]) {
      continue;
    }

    /* 다른 사원의 index*/
    for (j = i + 1; j < scores.length; j++) {
      if (scores[i][0] < scores[j][0] && scores[i][1] < scores[j][1]) {
        /* 완호가 못 받는 경우 */
        if (i === 0) {
          return -1;
        }

        noIncentiveGroup.push(i);
        break;
      }

      if (scores[j][0] < scores[i][0] && scores[j][1] < scores[i][1]) {
        noIncentiveGroup.push(j);
      }
    }
  }

  let result = 1;
  for (i = 0; i < scores.length; i++) {
    if (
      !noIncentiveGroup.includes(i) &&
      scores[i][0] + scores[i][1] > scores[0][0] + scores[0][1]
    ) {
      result++;
    }
  }

  return result;
};

module.exports = { solution };
