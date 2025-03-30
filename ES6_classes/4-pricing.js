// pricing.js
import Currency from './3-currency.js';  // Importation de la classe Currency

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;  // Utilisation du setter
    this.currency = currency;  // Utilisation du setter
  }

  // Getter pour _amount
  get amount() {
    return this._amount;
  }

  // Setter pour _amount
  set amount(value) {
    if (typeof value !== "number") {
      throw new TypeError("amount must be a number");
    }
    this._amount = value;
  }

  // Getter pour _currency
  get currency() {
    return this._currency;
  }

  // Setter pour _currency
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError("currency must be an instance of Currency");
    }
    this._currency = value;
  }

  // Méthode pour afficher le prix complet avec la devise
  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  // Méthode statique pour convertir un prix avec un taux de conversion
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== "number" || typeof conversionRate !== "number") {
      throw new TypeError("Both amount and conversionRate must be numbers");
    }
    return amount * conversionRate;
  }
}
