$(document).ready(function() {
    MatchGame.generateCardValues();
    MatchGame.renderCards(cardValues, $('#game'));
});

var MatchGame = {};
var cardValues = [];
/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
    console.log(cardValues);
    cardValues = [];
    var orderedValues = [];
    
    for (var i = 1; i < 9; i++) {
        orderedValues.push(i);
        orderedValues.push(i);
    }
    
    var a = 0;
    var numberOfCards = orderedValues.length;
    
    while (a < numberOfCards) {
        var randomIndex = Math.floor(Math.random() * orderedValues.length);
        cardValues.push(orderedValues[randomIndex]);
        orderedValues.splice(randomIndex, 1);
        a++;
    }
        console.log(cardValues);

     return cardValues;
    
     // Math.floor(Math.random() * (8 - 1 + 1)) + 1; // You could use Math.round(Math.random() * (max - min)) + min, this however gives a non-even distribution. Both, min and max only have approximately half the chance to roll:
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
    var cardColours = ['hsl(25, 85%, 65%)', 'hsl(55, 85%, 65%)', 'hsl(90, 85%, 65%)', 'hsl(160, 85%, 65%)', 'hsl(220, 85%, 65%)', 'hsl(265, 85%, 65%)', 'hsl(310, 85%, 65%)', 'hsl(360, 85%, 65%)'];
    
    $game.empty();
        
    for (var i = 0; i < cardValues.length; i++) {
        var $card = $('<div class="card col-xs-3"></div>');
        $card.data('value', cardValues[i]);
        $card.data('flipped', false);
        $card.data('color', cardColours[cardValues[i] - 1]);
        $game.append($card);
 
    }
};
/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */
MatchGame.flipCard = function($card, $game) {
};