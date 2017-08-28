var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
    
    var orderedValues = [];
    
    for (var i = 1; i < 9; i++) {
        orderedValues.push(i);
        orderedValues.push(i);
        console.log(orderedValues);
    }
    
    var randomValues = [];
    var a = 0;
    var numberOfCards = orderedValues.length;
    
    while (a < numberOfCards) {
        var randomIndex = Math.floor(Math.random() * orderedValues.length);
        randomValues.push(orderedValues[randomIndex]);
        orderedValues.splice(randomIndex, 1);
        a++;
    }
    
     return randomValues;
    
     // Math.floor(Math.random() * (8 - 1 + 1)) + 1; // You could use Math.round(Math.random() * (max - min)) + min, this however gives a non-even distribution. Both, min and max only have approximately half the chance to roll:
};
/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
};
/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */
MatchGame.flipCard = function($card, $game) {
};