const calculate = require('./calculate');

describe('calculate', () => {
  it('should handle AC button', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should handle number button', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '2');
    expect(result).toEqual({
      total: '10',
      next: '52',
      operation: '+',
    });
  });

  it('should handle decimal button', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '.');
    expect(result).toEqual({
      total: '10',
      next: '5.',
      operation: '+',
    });
  });

  it('should handle = button', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '=');
    expect(result).toEqual({
      total: '15',
      next: null,
      operation: null,
    });
  });

  it('should handle +/- button', () => {
    const result = calculate({ total: '10', next: '-5', operation: '+' }, '+/-');
    expect(result).toEqual({
      total: '10',
      next: '5',
      operation: '+',
    });
  });

  it('should handle operation button', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '-');
    expect(result).toEqual({
      total: '15',
      next: null,
      operation: '-',
    });
  });
});