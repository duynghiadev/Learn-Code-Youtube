// utils.js
const sleep = () => {
  return new Promise((resolve) => setTimeout(resolve, 1000))
}

module.exports = { sleep }
