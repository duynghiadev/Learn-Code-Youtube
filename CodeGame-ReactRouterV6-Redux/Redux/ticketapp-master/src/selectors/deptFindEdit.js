export const findDept =(dept,id) => {
    return dept.find(dpt => dpt._id === id)
}