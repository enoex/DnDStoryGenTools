/* =========================================================================
 *
 * generatePuzzle.js
 *      Generates a puzzle for Pathfinder / DnD
 *
 * ========================================================================= */
var _ = require('lodash');
var data = require('./data/base.js'); // include other data files if you'd like
var colors = require('colors');

// Pick random items from each group
function getRandomItem(group){
    return group[Math.random() * group.length | 0];
}

// Get and print out pieces from the list
function getPuzzle(){
    return getRandomItem(data.nouns).green.bold + ' ' +
    getRandomItem(data.description).blue + ' ' +
    getRandomItem(data.action).green + ' when a PC ' +
    '[' + getRandomItem(data.trigger).red + ']' + ' (if they / unless they / by ) ' +
    getRandomItem(data.activate).yellow;
}
module.exports = getPuzzle;

console.log( getPuzzle() );
