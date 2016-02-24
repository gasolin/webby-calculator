/**
 * Description:
 *   Allows Hubot to do mathematics.
 *
 * Dependencies:
 *   "mathjs": ">= 0.16.0"
 *
 * Configuration:
 *   None
 *
 * Commands:
 *   hubot calculate <expression> - Calculate the given math expression.
 *   hubot convert <expression> in <units> - Convert expression to given units.
 *
 * Author:
 *  canadianveggie
 */

var mathjs = require('mathjs');

module.exports = function(robot) {
  robot.respond(/(calc|calculate|calculator|convert|math|maths)( me)? (.*)/i,
  (msg) => {
    try {
      var result = mathjs.eval(msg.match[3]);
      msg.send(`${result}`);
    } catch(error) {
      msg.send(error.message || 'Could not compute.');
    }
  });
}
