export const addSpaceBeforeUppercase = (name) => {
  return name.replace(/(?<=[a-z])(?=[A-Z])/g, ' ')
}
