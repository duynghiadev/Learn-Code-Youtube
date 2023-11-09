const arr = ['✌', '✊', '🖐']

function choose(userChoice) {
  let randomChoice = Math.floor(Math.random() * 3)
  let computerChoice = arr[randomChoice]
  let result = compare(userChoice, computerChoice)
  document.getElementById(
    'result'
  ).innerHTML = `<b>Bạn chọn ${userChoice}</b> Máy chọn ${computerChoice} <b>Result:</b> ${result}`
}

function compare(user, computer) {
  if (user === computer) {
    return 'equally 🤝'
  } else if (user === '✊') {
    if (computer === '🖐') {
      return 'lose ❌'
    } else {
      return 'win ✅'
    }
  } else if (user === '✌') {
    if (computer === '✊') {
      return 'lose ❌'
    } else {
      return 'win ✅'
    }
  } else if (user === '🖐') {
    if (computer === '✌') {
      return 'lose ❌'
    } else {
      return 'win ✅'
    }
  }
}
