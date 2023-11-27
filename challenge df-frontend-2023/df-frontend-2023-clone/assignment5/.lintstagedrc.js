const path = require('path')

const lint = (filenames) =>
  `next lint --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

const format = `prettier --write`

module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': [lint, format],
  'src/**/*.{css,scss}': [format],
}
