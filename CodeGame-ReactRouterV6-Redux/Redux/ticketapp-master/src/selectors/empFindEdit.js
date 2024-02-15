export const findEmp =(employee,id) => {
    return employee.find(emp => emp._id === id)
}

export const selectEmpName = (employees, empIds) => {
    const selectedEmployees = employees.filter(employee => {
        return empIds.includes(employee._id)
    })

    return selectedEmployees.map(emp => emp.name)
}

export const selectEmployeesByDepartment = (employees, deptId) => {
    return employees.filter(emp => emp.department === deptId)
}  