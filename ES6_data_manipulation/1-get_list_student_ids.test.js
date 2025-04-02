const getListStudentIds = require('./1-get_list_student_ids');

describe('getListStudentIds', () => {
  it('returns an array of student IDs', () => {
    expect.assertions(1); // Indique qu'une assertion est attendue
    const students = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ];
    expect(getListStudentIds(students)).toStrictEqual([1, 2, 3]);
  });

  it('returns an empty array if input is not an array', () => {
    expect.assertions(3); // Indique qu'il y a 3 assertions attendues
    expect(getListStudentIds(null)).toStrictEqual([]);
    expect(getListStudentIds({})).toStrictEqual([]);
    expect(getListStudentIds('string')).toStrictEqual([]);
  });

  it('returns an empty array for an empty input array', () => {
    expect.assertions(1); // Indique qu'une assertion est attendue
    expect(getListStudentIds([])).toStrictEqual([]);
  });
});
