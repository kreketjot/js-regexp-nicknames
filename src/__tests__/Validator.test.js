import Validator from '../Validator';

test.each([
  ['a', /длина/],
  ['', /длина/],
  ['abc$a', /допустимы только/i],
  ['a4478a', /подряд/],
  ['478a', /начинаться/],
])('abnormal names', (name, expected) => {
  const recived = Validator.validateUsername(name);
  const contains = recived.some((err) => expected.test(err));
  expect(contains).toBe(true);
});

test('normal name', () => {
  const recived = Validator.validateUsername('cO0l_nAmE');
  const errorsCnt = recived.length;
  expect(errorsCnt).toBe(0);
});
