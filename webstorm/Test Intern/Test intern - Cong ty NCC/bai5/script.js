function canWin(n) {
  if (n % 4 === 0) {
    return false;
  }

  return true;
}

function handleGame(matches) {
  for (let i = 0; i < matches.length; i++) {
    const n = matches[i];

    console.log(canWin(n) ? "true" : "false");
  }
}

const T = 3;
const matches = [1, 2];

handleGame(matches);
