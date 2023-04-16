const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
const array = [
  ['David Abram'],
  ['Robin Attfield'],
  'Thomas Berry',
  ['Paul R.Ehrlich'],
  'donna Haraway',
  ' BrIaN_gOodWiN  ',
  {
    0: 'Serenella Iovino'
  },
  'Erazim Kohak',
  '  val_plumwood',
];

function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let newArray = members.filter(i => typeof(i) === 'string').map(i => i.replace(/ /g,'').toUpperCase()).sort();
  let result = '';
  newArray.forEach(item => {
    result += item[0];
  })
  //console.log(newArray);
  return result;
  } else {
    return false;
  }
}

createDreamTeam(array);

module.exports = {
  createDreamTeam
};

