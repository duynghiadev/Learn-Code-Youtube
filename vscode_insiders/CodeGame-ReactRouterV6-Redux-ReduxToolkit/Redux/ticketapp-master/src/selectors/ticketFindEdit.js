export const findTicket =(tickets,id) => {
    return tickets.find(tick => tick._id === id)
}

export const filterEmpByDept=(employee,deptId) => {
    return employee.filter(emp => emp.department === deptId)
}