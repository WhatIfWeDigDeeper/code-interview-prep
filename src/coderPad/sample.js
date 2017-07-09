const fp = require('lodash/fp');
const Mocha = require('mocha');
const assert = require('assert');

const mocha = new Mocha();

class Greeter {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return `Hello, ${this.name}`;
  }

}

const sayHello = (greeting) => {
  const greeter = new Greeter(greeting);
  return greeter.sayHi();
};

const mapInt = fp.map(parseInt);

// const result = mapInt(['6', '8', '10']);
// console.log(result);

// Bit of a hack, sorry!
mocha.suite.emit('pre-require', this, 'solution', mocha);

describe('CoderPad', () => {
  describe('Question #1', () => {
    it('should work', () => {
      assert.ok(sayHello('World') === 'Hello, World');
    });

    xit('should ', () => {
      assert.ok(false);
    });
  });

  describe('Question #2', () => {
    xit('should ', () => {
      assert.ok(false);
    });

    xit('should ', () => {
      assert.ok(false);
    });
  });
});

mocha.run();
