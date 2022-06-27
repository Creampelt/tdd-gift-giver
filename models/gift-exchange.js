const { BadRequestError } = require("../utils/errors");

class GiftExchange {
  static removeRandomFromArr(arr) {
    return arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
  }

  static pairs(names) {
    if (names.length % 2 === 1) {
      throw new BadRequestError("The number of provided names may not be odd");
    }
    const namesToPair = [...names];
    const pairedNames = [];
    while (namesToPair.length > 0) {
      const pair = [namesToPair.pop()];
      pair.push(this.removeRandomFromArr(namesToPair));
      pairedNames.push(pair);
    }
    return pairedNames;
  }

  static traditional(names) {
    const namesToGive = [...names];
    const result = [];
    let first = namesToGive.pop();
    let last = first;
    while (namesToGive.length > 0) {
      let next = this.removeRandomFromArr(namesToGive);
      result.push(`${last} is giving a gift to ${next}`);
      last = next;
    }
    result.push(`${last} is giving a gift to ${first}`);
    return result;
  }
}

module.exports = GiftExchange;