export default function createReportObject(employeesList) {
    const allEmployees = {};
  
    // Iterate through the employeesList object and build the allEmployees object
    for (const department in employeesList) {
      if (employeesList.hasOwnProperty(department)) {
        // Create a lowercase version of the department name as the key
        const departmentName = department.toLowerCase().slice(1);
        allEmployees[departmentName] = [...employeesList[department]];
      }
    }
  
    return {
      allEmployees, // All employees grouped by department
      getNumberOfDepartments() {
        return Object.keys(employeesList).length; // Return number of unique departments
      },
    };
  }
  