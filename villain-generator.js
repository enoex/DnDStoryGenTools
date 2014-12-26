/* =========================================================================
 *
 * villain-generator
 *
 * ========================================================================= */
var data = require('./data/villain.json');
var _ = require('lodash');
var colors = require('colors');

function randomItem (array){
    return array[Math.random() * array.length | 0];
}

function getVillain(){
    return "The villain's " + randomItem(data.who).green.bold + 
        " died (in a / from / by) " + randomItem(data.how).red + 
        " caused by " + randomItem(data.source).blue;
}
module.exports = getVillain;

console.log( getVillain() );
