import getListStudentIds from "./1-get_list_student_ids.js";

test('Returns an array of student IDs', () => {
  const students = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  expect(getListStudentIds(students)).toEqual([1, 2, 3]);
});

test('Returns an empty array if input is not an array', () => {
  expect(getListStudentIds(null)).toEqual([]);
  expect(getListStudentIds({})).toEqual([]);
  expect(getListStudentIds("string")).toEqual([]);
});

test('Returns an empty array for an empty input array', () => {
  expect(getListStudentIds([])).toEqual([]);
});
