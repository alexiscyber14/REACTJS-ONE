const operate = require('./operate');

describe('operate function', () => {
  it('adds two numbers', () => {
    expect(operate(2, 3, '+')).toBe('5');
  });

  it('subtracts two numbers', () => {
    expect(operate(5, 2, '-')).toBe('3');
  });

  it('multiplies two numbers', () => {
    expect(operate(2, 3, 'x')).toBe('6');
  });

  it('divides two numbers', () => {
    expect(operate(6, 3, '÷')).toBe('2');
  });

  it('returns an error message when dividing by zero', () => {
    expect(operate(6, 0, '÷')).toBe("Can't divide by 0.");
  });

  it('calculates the modulo of two numbers', () => {
    expect(operate(7, 3, '%')).toBe('1');
  });

  it('returns an error message when dividing by zero to calculate modulo', () => {
    expect(operate(7, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('throws an error when given an unknown operation', () => {
    expect(() => operate(2, 3, '$')).toThrowError("Unknown operation '$'");
  });
});
