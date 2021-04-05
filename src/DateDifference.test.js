//const age = require('./DateDifference');
import age from './DateDifference.mjs';
describe('Age Function', () => {
  test('age', () => {
    expect(age('1962-07-06', '1963-07-06', 'ymd', 'en')).toBe('1 year');
  }),
    test('age', () => {
      expect(age('1962-07-06', '1964-07-05', 'ymd', 'en')).toBe(
        '1 year and 11 months'
      );
    }),
    test('age', () => {
      expect(age('1962-07-06', '1964-06-05', 'ymd', 'en')).toBe(
        '1 year and 10 months'
      );
    }),
    test('age', () => {
      expect(age('1962-07-06', '1964-01-01', 'ymd', 'en')).toBe(
        '1 year and 5 months'
      );
    });
});

// console.log(
//   '1962-07-06',
//   '1963-07-06',
//   age('1962-07-06', '1963-07-06', 'ymd', 'en')
// ); // 1 year
// console.log(
//   '1962-07-06',
//   '1963-07-05',
//   age('1962-07-06', '1963-07-05', 'ymd', 'en')
// ); // 11 months
// console.log(
//   '1962-07-06',
//   '1963-07-07',
//   age('1962-07-06', '1963-07-07', 'ymd', 'en')
// ); // 1 year 1 day
// console.log(
//   '1962-07-06',
//   '1963-07-05',
//   age('1962-07-06', '1963-07-05', 'ymd', 'en')
// ); // 11 months 29 days
// console.log(
//   '1962-07-06',
//   '1963-06-06',
//   age('1962-07-06', '1963-06-06', 'ymd', 'en')
// ); // 11 months
// console.log(
//   '1962-07-06',
//   '1963-05-06',
//   age('1962-07-06', '1963-05-06', 'ymd', 'en')
// ); // 10 months
// console.log(
//   '1962-07-06',
//   '1963-08-05',
//   age('1962-07-06', '1963-08-05', 'ymd', 'en')
// ); // 1 year 29days
