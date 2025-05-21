const { expect } = require('chai');
const { spawn } = require('child_process');

describe('1-stdin.js', () => {
  it('should display greeting, user input response, and closing message', (done) => {
    const child = spawn('node', ['1-stdin.js']);

    let output = '';
    const name = 'Alice';

    child.stdout.on('data', (data) => {
      output += data.toString();

      // Quand le message d'accueil s'affiche, on écrit le nom + fin
      if (output.includes('Welcome to Holberton School')) {
        child.stdin.write(`${name}\n`);
        child.stdin.end(); // Simule fin de l'entrée (stdin 'end')
      }
    });

    child.on('close', () => {
      // Vérifie tous les messages dans la sortie
      expect(output).to.include('Welcome to Holberton School, what is your name?');
      expect(output).to.include(`Your name is: ${name}`);
      expect(output).to.include('This important software is now closing');
      done();
    });
  });
});
