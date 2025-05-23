const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.trim().split('\n');
      const students = lines.slice(1).filter(line => line);
      const fields = {};
      students.forEach(student => {
        const parts = student.split(',');
        const field = parts[3];
        if (!fields[field]) fields[field] = [];
        fields[field].push(parts[0]);
      });

      let msg = `Number of students: ${students.length}\n`;
      for (const [field, list] of Object.entries(fields)) {
        msg += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`;
      }
      resolve(msg.trim());
    });
  });
}

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    const dbPath = process.argv[2];
    if (!dbPath) {
      res.end('Cannot load the database');
      return;
    }
    try {
      const studentsList = await countStudents(dbPath);
      res.end(studentsList);
    } catch (err) {
      res.end('Cannot load the database');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
