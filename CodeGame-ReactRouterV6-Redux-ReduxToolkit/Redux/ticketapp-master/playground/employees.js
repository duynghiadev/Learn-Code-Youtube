
const employees = [
    { id: 1, name: 'emp1'},
    { id: 2, name: 'emp2'},
    { id: 3, name: 'emp3'}
]

const empIds = [1]

const selectedEmployees = employees.filter(emp => {
    return empIds.includes(emp.id)
})

console.log(selectedEmployees)

console.log(selectedEmployees.map(emp => emp.name))
console.log(selectedEmployees.map(emp => emp.name).join(', '))
