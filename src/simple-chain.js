const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
    //не годится, так как не добавит null, false
    //if (value) {
    //  this.chain.push(`( ${value} )`);
    //  return this;
    //} else {
    //  this.chain.push(`(  )`);
    //  return this;
    //}
  },
  removeLink(position) {
    if (typeof(position) === 'number' && position > 0 && position < this.chain.length ) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    // the existing chain must be deleted
    this.chain = [];
    return result;
  }
};


module.exports = {
  chainMaker
};


