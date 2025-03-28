export default function createEmployeesObject(departmentName, employees) {
    // Dynamically create the object with departmentName as key and employees array as value
    const result = {};
    result[`$${departmentName}`] = employees;
    return result;
}
