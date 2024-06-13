# Explanation code

I can help you split this code into three separate files, each with its own feature and corresponding `console.log` statement. Let's start by separating the code into three distinct features:

1. `File 1`: Sequential `sleep` calls with `await`.
2. `File 2`: Parallel `sleep` calls using `Promise.all`.
3. `File 3`: Timer measurement for the tasks.

In this setup, `sequential.js` and `parallel.js` define the two types of tasks while `timer.js` measures the time for both types. `utils.js` contains the utility function sleep. Each file logs its respective type using `console.log`.

---

## How to run code?

You can run the `timer.js` file to execute the measurement of both sequential and parallel tasks. This file orchestrates the execution of the tasks defined in `sequential.js` and `parallel.js`, and it logs the timer measurement for each task type.

To run the program, you can execute `node timer.js` in your terminal, assuming you have `Node.js` installed and all the files are in the same directory. This command will run the timer measurement, which will execute both types of tasks and log the time taken for each type.
