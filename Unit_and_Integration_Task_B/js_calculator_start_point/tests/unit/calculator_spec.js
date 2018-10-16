var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('should be able to add correctly', function(){
    calculator.previousTotal = 4;
    calculator.add(1);
    actual = calculator.runningTotal;
    assert.strictEqual(actual, 5);
  })

  it('should be able to subtract correctly', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    actual = calculator.runningTotal;
    assert.strictEqual(actual, 3);
  })

  it('should be able to multiply correctly', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    actual = calculator.runningTotal;
    assert.strictEqual(actual, 15);
  })

  it('should be able to divide correctly', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    actual = calculator.runningTotal;
    assert.strictEqual(actual, 3);
  })

  it('should concatenate multiple number button clicks into running total', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    calculator.numberClick(4);
    actual = calculator.runningTotal;
    assert.strictEqual(actual, 1234)
  })

  it('should be able to chain multiple operations together', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(8);
    calculator.operatorClick('-');
    calculator.numberClick(5);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('/');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    actual = calculator.runningTotal;
    assert.strictEqual(actual, 2)
  })

  it('should clear running total without affecting the calculation', function(){
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(6);
    calculator.operatorClick('=');
    // expect running total to be 10.
    calculator.operatorClick('+');
    calculator.numberClick(1);
    // expect number 1 to be cleared but the + calculation remembered.
    calculator.clearClick();
    calculator.numberClick(2);
    // expect 2 to be added to 10 instead of 1.
    calculator.operatorClick('=');
    actual = calculator.runningTotal;
    assert.strictEqual(actual, 12)
  })

});
