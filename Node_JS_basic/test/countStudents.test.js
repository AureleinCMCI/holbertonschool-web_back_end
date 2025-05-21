const fs = require('fs');
const path = require('path');
const { expect } = require('chai');

const countStudents = require('../countStudents');

describe('countStudents', () => {
  const testCsvPath = path.join(__dirname, 'students.csv');
  const invalidCsvPath = path.join(__dirname, 'does_not_exist.csv');

  before(() => {
    // Crée un fichier CSV de test
    fs.writeFileSync(testCsvPath, [
      'firstname,field',
      'John,CS',
      'Doe,CS',
      'Bob,CS',
      'Jane,Math',
      'Alice,Math',
      '', // ligne vide à ignorer
    ].join('\n'));
  });

  after(() => {
    // Nettoie le fichier de test
    if (fs.existsSync(testCsvPath)) fs.unlinkSync(testCsvPath);
  });

  it('should throw an error if the database cannot be loaded', () => {
    expect(() => countStudents(invalidCsvPath)).to.throw('Cannot load the database');
  });

  it('should log the correct number of students and per field', () => {
    // Capture la sortie console
    let output = [];
    const originalLog = console.log;
    console.log = (msg) => output.push(msg);

    countStudents(testCsvPath);

    console.log = originalLog; // Restaure

    expect(output[0]).to.equal('Number of students: 5');
    expect(output).to.deep.include('Number of students in CS: 3. List: John, Doe, Bob');
    expect(output).to.deep.include('Number of students in Math: 2. List: Jane, Alice');
  });
});
