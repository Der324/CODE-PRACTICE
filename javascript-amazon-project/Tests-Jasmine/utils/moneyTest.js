import {formatCurrency} from '../../scripts/utils/money.js';

describe('test suite: formatCurrency', () => {
  it('converts cents into dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95'); // basic test case
  });

  it('handles zero cents', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('handles single digit cents', () => {
    expect(formatCurrency(5)).toEqual('0.05');
  });

  it('handles negative amounts', () => {
    expect(formatCurrency(-1234)).toEqual('-12.34');
  });

  it('rounds to the nearest cent', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
    expect(formatCurrency(2000.4)).toEqual('20.00');
  });


});
