export default class Airport {
    constructor(name, code) {
      if (typeof name !== "string") {
        throw new TypeError("name must be a string");
      }
      if (typeof code !== "string") {
        throw new TypeError("code must be a string");
      }
  
      this._name = name;
      this._code = code;
    }
  
    // Getters pour name et code
    get name() {
      return this._name;
    }
  
    get code() {
      return this._code;
    }
  
    // Redéfinition de toString pour renvoyer le code de l'aéroport
    toString() {
      return this._code;
    }
  }
  