import getListStudents from './0-get_list_students.js';

test('getListStudents doit retourner un tableau avec les bons étudiants', () => {
  expect(getListStudents()).toStrictEqual([
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ]);
});
