export const userLocalStorage = {
  get: () => (localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null),
  set: (userDataContentInfo) => {
    const dataJson = JSON.stringify(userDataContentInfo)
    localStorage.setItem('user', dataJson)
  },
  remove: () => {
    localStorage.removeItem('user')
  }
}

export const userAdminLocalStorage = {
  get: () =>
    localStorage.getItem('userAdmin') ? JSON.parse(localStorage.getItem('userAdmin')) : null,
  set: (userDataContentInfo) => {
    const dataJson = JSON.stringify(userDataContentInfo)
    localStorage.setItem('userAdmin', dataJson)
  },
  remove: () => {
    localStorage.removeItem('userAdmin')
  }
}

export const themeLocalStorage = {
  get: () => {
    let isDark
    localStorage.getItem('theme')
      ? (isDark = JSON.parse(localStorage.getItem('theme')))
      : (isDark = null)
    return isDark
  },
  set: (isDrak) => {
    const dataJson = JSON.stringify(isDrak)
    localStorage.setItem('theme', dataJson)
  },
  remove: () => {
    localStorage.removeItem('theme')
  }
}
