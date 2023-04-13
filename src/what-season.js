const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
const date = new Date(81, 10, 13, 12, 50, 13, 493)
function getSeason(date) {
  //getOwnPropertyNames возвращает массив всех свойств
  //обязательные параметры Date - год, месяц, день
  console.log(Object.getOwnPropertyNames(date)[0]);
  if (!date) {
    return 'Unable to determine the time of year!';
    //проверяем также наличие обязательных параметров
  } if (!(date instanceof Date) || Object.getOwnPropertyNames(date)) {
    throw new Error('Invalid date!');
  } else {
    let month = date.getMonth();
    console.log(month);
    if (month > 1 && month < 5) {
      return 'spring';
    }
    else if (month >=5 && month < 8) {
      return 'summer';
    }
    else if (month >=8 && month < 11) {
      return 'autumn|fall';
    } else {
      return 'winter';
    }
    }
}
getSeason(date);

module.exports = {
  getSeason
};
