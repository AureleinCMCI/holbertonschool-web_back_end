import Building from './5-building.js'; // Importation de la classe parent

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Appelle le constructeur de Building pour initialiser sqft
    
    if (typeof floors !== "number") {
      throw new TypeError("floors must be a number");
    }
    this._floors = floors;
  }

  // Getter pour floors
  get floors() {
    return this._floors;
  }

  // Redéfinition de evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
