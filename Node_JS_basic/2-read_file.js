const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    if (lines.length === 0) {
      console.log('Number of students: 0');
      return;
    }
    const headers = lines[0].split(',');
    const fieldIndex = headers.indexOf('field');
    const firstnameIndex = headers.indexOf('firstname');
    if (fieldIndex === -1 || firstnameIndex === -1) {
      throw new Error('Invalid CSV format');
    }
    const students = lines.slice(1).map(line => line.split(','));
    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);
    const fields = {};
    students.forEach(student => {
      const field = student[fieldIndex];
      const firstname = student[firstnameIndex];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });
    for (const field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
