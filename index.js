/**
 * Chai helper library for asserting whether a string is hex colour, RGB, or both.
 */

var tiny = require('tinycolor');

module.exports = function (chai, utils) {
  var Assertion = chai.Assertion;

  Assertion.addMethod('color', function(color) {
    var obj = this._obj;

    this.assert(
      tiny.equals(obj, color),
      'expected #{this} to be equivalent to #{exp} but got #{act}',
      'expected #{this} not to be equivalent to #{exp}'
    );
  });
};
