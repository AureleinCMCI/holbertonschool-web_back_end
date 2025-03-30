export default class HolbertonClass {
    constructor(size, location) {
      if (typeof size !== "number") {
        throw new TypeError("size must be a number");
      }
      if (typeof location !== "string") {
        throw new TypeError("location must be a string");
      }
  
      this._size = size;
      this._location = location;
    }
  
    // Getters pour size et location
    get size() {
      return this._size;
    }
  
    get location() {
      return this._location;
    }
  
    // Convertir l'objet en Number retourne size
    valueOf() {
      return this._size;
    }
  
    // Convertir l'objet en String retourne location
    toString() {
      return this._location;
    }
  }
  