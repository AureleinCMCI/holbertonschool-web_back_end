import Currency from './3-currency.js'; // Importation de la classe Currency

export default class Pricing{
    constructor(amount, currency) {
        if (typeof amount !== "number") {
          throw new TypeError("amount must be a number");
        }
        if (!(currency instanceof Currency)) {
          throw new TypeError("currency must be an instance of Currency");
        }
    
        this._amount = amount;
        this._currency = currency;
}
get amount() {
    return this._amount;
  }

set amount(value) {
    if (typeof value !== "number") {
      throw new TypeError("amount must be a number");
    }
    this._amount = value;
  }
get code() {
    return this._code;
  }

set code(value) {
    if (typeof value !== "string") {
      throw new TypeError("code must be a string");
    }
    this._code = value;
  }
  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== "number" || typeof conversionRate !== "number") {
      throw new TypeError("Both amount and conversionRate must be numbers");
    }
    return amount * conversionRate;
}