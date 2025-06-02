// full_server/controllers/StudentsController.js

import { readDatabase } from '../utils.js';

class StudentsController {
  static getAllStudents(request, response) {
    const databaseFile = process.argv[2]; // On suppose que le chemin du fichier est passé en argument lors du lancement du serveur

    readDatabase(databaseFile)
      .then((studentsByField) => {
        let result = 'This is the list of our students\n';
        // Tri des champs par ordre alphabétique (insensible à la casse)
        const fields = Object.keys(studentsByField).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        for (const field of fields) {
          const list = studentsByField[field];
          result += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`;
        }
        // Suppression du dernier saut de ligne
        result = result.trim();
        response.status(200).send(result);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const databaseFile = process.argv[2];
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(databaseFile)
      .then((studentsByField) => {
        const list = studentsByField[major];
        if (list) {
          response.status(200).send(`List: ${list.join(', ')}`);
        } else {
          response.status(200).send('List:');
        }
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
