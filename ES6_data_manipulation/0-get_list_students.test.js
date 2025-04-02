import getListStudents from './0-get_list_students';

describe('getListStudents', () => {
  it('doit retourner un tableau avec les bons étudiants', () => {
    expect.assertions(1); // Indique le nombre attendu d'assertions
    expect(getListStudents()).toStrictEqual([
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' },
    ]);
  });
});
