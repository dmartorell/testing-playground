import addFive from './addFive';

test('addFive function', () => {
  const scenarios = [
    { argument: 5, result: 10 },
    { argument: 10, result: 15 },
    { argument: -5, result: 0 },
    { argument: 'string', result: 0 },
  ];
  scenarios.forEach((scenario) => {
    const result = addFive(scenario.argument);
    expect(result).toBe(scenario.result);
  });
});
