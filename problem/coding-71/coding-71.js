const solution = (user_id, banned_id) => {
  const userId = user_id.map((id) => id.split(""));
  const bannedId = banned_id.map((id) => id.split(""));

  /* 밴 당한 아이디 후보들 bannedId 기준으로 모음 */
  const bannedUser = Array.from({ length: bannedId.length }, () => []);

  /* 기준은 밴 당한 아이디 */
  for (let bannedIndex = 0; bannedIndex < bannedId.length; bannedIndex++) {
    /* 모든 유저 id 순회로 확인 */
    for (let userIndex = 0; userIndex < userId.length; userIndex++) {
      const bannedIdLength = bannedId[bannedIndex].length;

      /* id 길이가 같을 경우만 진행 */
      if (userId[userIndex].length === bannedIdLength) {
        /* id 비교하기 위한 loop */
        for (let idIndex = 0; idIndex < bannedIdLength; idIndex++) {
          /* "*"는 비교 패스 */
          if (
            bannedId[bannedIndex][idIndex] === "*" ||
            userId[userIndex][idIndex] === bannedId[bannedIndex][idIndex]
          ) {
            /* 마지막 id값 비교가 같다면 조건 충족 */
            if (idIndex === bannedIdLength - 1) {
              bannedUser[bannedIndex].push(user_id[userIndex]);
            }

            continue;
          }

          break;
        }
      }
    }
  }

  const result = new Set();

  const getCombination = (bannedGroup, index) => {
    if (index === bannedUser.length) {
      bannedGroup.sort();

      /* 조합을 구한 후 uniq 판단 위해 string 변환 */
      result.add(bannedGroup.join(""));
      return;
    }

    for (let i = 0; i < bannedUser[index].length; i++) {
      const user = bannedUser[index][i];

      if (bannedGroup.includes(user)) {
        continue;
      }

      getCombination([...bannedGroup, user], index + 1);
    }
  };

  getCombination([], 0);

  return result.size;
};

module.exports = { solution };
