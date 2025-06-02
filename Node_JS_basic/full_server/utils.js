
import fs from 'fs/promises';

export function readDatabase(filePath) {
  return fs.readFile(filePath, 'utf-8')
    .then(data => {
      const lines = data.split('\n').filter(line => line.trim() !== '');
      const studentsByField = {};

      for (const line of lines.slice(1)) { // skip header
        const [firstname, , , field] = line.split(',');
        if (field && firstname) {
          if (!studentsByField[field]) studentsByField[field] = [];
          studentsByField[field].push(firstname);
        }
      }
      return studentsByField;
    })
    .catch(err => {
      return Promise.reject(err);
    });
}