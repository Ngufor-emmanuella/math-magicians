import operate from './operate';

describe('checking operators', () => {
  const numberOne = '100';
  const numberTwo = '20';
  let operationSymbol;

  test('addition operator', () => {
    operationSymbol = '+';
    expect(operate(numberOne, numberTwo, operationSymbol)).toEqual('120');
  });

  test('minus operator', () => {
    operationSymbol = '-';
    expect(operate(numberOne, numberTwo, operationSymbol)).toEqual('80');
  });

  test('multiplication operator', () => {
    operationSymbol = 'x';
    expect(operate(numberOne, numberTwo, operationSymbol)).toEqual('2000');
  });
  test('division operator', () => {
    operationSymbol = '÷';
    expect(operate(numberOne, numberTwo, operationSymbol)).toEqual('5');
  });
  test('modulo operator', () => {
    operationSymbol = '%';
    expect(operate(numberOne, numberTwo, operationSymbol)).toEqual('0');
  });
});

