/*returns the difference between two dates formatted giving the 
number of years,months,days,hours,minutes and seconds depending 
on what options are selected and returned in the selected language.

parameters: 
  firstDate:  the first date to be compared.
  lastDate: the last date to be compared, default is the current date and time.
  format: how the return should be formatted, the following can be used:
    y-year(s), m-month(s), d-day(s)
    they should be entered in this order, though any parameter can be left off and still give the complete difference.
    the default is ymd (years and months and days)
  language: the language the returned output should be formatted in.
*/
import { languages } from './languages.js'; //import the translation file

export const age = (
  firstDate,
  lastDate = Date.now(),
  format = 'ym',
  language = 'en'
) => {
  //deconstruct the translation object
  const { year, years, month, months, day, days, and } = languages[language];

  //if parameter firstDate is not a date object try to convert it to one

  if (!(firstDate instanceof Date)) {
    firstDate = new Date(firstDate);
  }
  if (firstDate == 'Invalid Date') {
    return 'First Date not valid';
  }

  //if parameter lastDate is not a date object try to convert it to one
  if (!(lastDate instanceof Date)) {
    lastDate = new Date(lastDate);
  }
  if (lastDate == 'Invalid Date') {
    return 'Last Date not valid';
  }

  //@add a regular expression to check the format

  //@add a check for the language

  //Set variables

  const dateDifference = new Date();
  let returnString = '';
  let remainingDate = new Date(lastDate - firstDate);
  let y = remainingDate.getFullYear() - 1970;
  let m = remainingDate.getMonth();
  let d = remainingDate.getDate();

  //if years are wanted and there is one format the output string
  if (format.search('y') !== -1) {
    if (y !== 0) {
      returnString = `${y} ${y === 1 ? year : years}`;
    }
    //else pass the number of years to months
  } else {
    m += y * 12;
  }
  //if months are wanted
  if (format.search('m') !== -1) {
    if (m !== 0) {
      if (returnString !== '') {
        //if there is something already in the string add an ' and '
        returnString += ` ${and} `;
      }
      returnString += `${m} ${m === 1 ? month : months}`;
    }
    // if months are not wanted set months to 0
  } else {
    m = 0;
    remainingDate = new Date(remainingDate - y);
    d = remainingDate.getTime() / 1000 / 60 / 60 / 24;
  }
  if (format.search('d') !== -1) {
    if (d !== 0) {
      if (returnString !== '') {
        returnString += ` ${and} `;
      }
      returnString += `${d} ${d === 1 ? day : days}`;
    }
  }
  return returnString;
};

console.log(age('1962-07-01', '1963-07-01', 'd', 'es'));

export default age;
//module.exports = age;
// console.log('d: ', d);
// console.log('y: ', y);
// console.log('m: ', m);
// console.log('lastDate: ', lastDate);
// console.log('firstDate: ', firstDate);
// console.log('remainingDate: ', remainingDate);
