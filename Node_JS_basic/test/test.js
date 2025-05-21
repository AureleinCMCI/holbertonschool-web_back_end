const { expect } = require('chai');

describe('displayMessage', () => {
  it('should log the message to the console', () => {
    const displayMessage = require('../0-console');
    const message = 'Hello Mocha!';

    // Mock de console.log
    const originalLog = console.log;
    let logOutput = '';
    console.log = (msg) => {
      logOutput = msg;
    };

    displayMessage(message);

    expect(logOutput).to.equal(message);

    // Restaure le console.log original
    console.log = originalLog;
  });
});
