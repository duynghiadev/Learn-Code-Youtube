import inquirer from 'inquirer'

inquirer
  .prompt([
    {
      type: 'list',
      name: 'inputHandlingReview',
      message: 'Node.js input handling is...',
      choices: ['Easy', 'Okay', 'Complicated'],
      filter: (val) => {
        return val.toLowerCase()
      }
    }
  ])
  .then((answers) => {
    console.log(answers)
  })
