export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;       // Utilisation des setters pour la validation
    this.length = length;
    this.students = students;
  }

  // Getter et Setter pour `name`
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== "string") {
      throw new TypeError("name must be a string");
    }
    this._name = value;
  }

  // Getter et Setter pour `length`
  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== "number") {
      throw new TypeError("length must be a number");
    }
    this._length = value;
  }

  // Getter et Setter pour `students`
  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value) || !value.every((student) => typeof student === "string")) {
      throw new TypeError("students must be an array of strings");
    }
    this._students = value;
  }
}
