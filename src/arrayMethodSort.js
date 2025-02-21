'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => (String(a) > String(b) ? 1 : -1),
  ) {
    for (let key = 0; key < this.length; key++) {
      for (let i = key; i < this.length; i++) {
        const secondIndex = this[i];

        if (compareFunction(this[key], secondIndex) > 0) {
          this[i] = this[key];
          this[key] = secondIndex;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
