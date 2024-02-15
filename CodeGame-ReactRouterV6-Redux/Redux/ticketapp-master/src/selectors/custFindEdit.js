export const findCust =(customer,id) => {
    return customer.find(cust => cust._id === id)
}