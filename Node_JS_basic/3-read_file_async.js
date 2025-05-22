function countStudents(path) {
  return new Promise((resolve, reject) => {
    const fs = require('fs');
    const { parse } = require('csv-parse');

    const students = [];
    const fields = {};

    // Essaye d'ouvrir le fichier en mode stream
    const stream = fs.createReadStream(path)
      .on('error', () => {
        reject(new Error('Cannot load the database'));
      });

    // Parse le CSV
    stream
      .pipe(parse({ columns: true, skip_empty_lines: true }))
      .on('data', (row) => {
        // Ignore les lignes vides ou incomplètes
        if (!row.firstname || !row.field) return;

        students.push(row);

        // Trie les prénoms par filière
        const field = row.field;
        if (!fields[field]) fields[field] = [];
        fields[field].push(row.firstname);
      })
      .on('end', () => {
        // Affiche le nombre total d'étudiants
        console.log(`Number of students: ${students.length}`);
        // Affiche le nombre d'étudiants par filière et la liste des prénoms
        for (const [field, names] of Object.entries(fields)) {
          console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }
        resolve();
      })
      .on('error', () => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
