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
    
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
    $game.data('flippedCards', []);
    var cardColours = ['hsl(25, 85%, 65%)', 'hsl(55, 85%, 65%)', 'hsl(90, 85%, 65%)', 'hsl(160, 85%, 65%)', 'hsl(220, 85%, 65%)', 'hsl(265, 85%, 65%)', 'hsl(310, 85%, 65%)', 'hsl(360, 85%, 65%)'];
    
    $game.empty();
        
    for (var i = 0; i < cardValues.length; i++) {
        var $card = $('<div class="card col-xs-3"></div>');
        $card.data('value', cardValues[i]);
        $card.data('flipped', false);
        $card.data('color', cardColours[cardValues[i] - 1]);
        $game.append($card);
    };
    
    $('.card').click(function() {
        
        MatchGame.flipCard($(this),$('#game'))
    });
};
/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {
   
    var $flippedCards = $game.data('flippedCards', []);
    
    console.log($card.data('flipped')); //returns false at the first click, true at second click
    console.log($card.data('value')); //returns correctly
    console.log($card.data('color')); //returns correctly
    
    if ($card.data('flipped').required) {
        
        console.log('card already flipped'); //added just to check whether if true can be accessed, and it doesn't seem to be!
        
        return
        
    } else {
        
        $card.data('flipped', true);
        $card.css('background-color', $card.data('color'));
        $card.text($card.data('value'));
        $flippedCards.push($card.data('value'));
    };
    
    console.log($card.data('flipped')); //always returns true
    
    if ($flippedCards.length = 2) {
        if ($flippedCards[0] === $flippedCards[1]) {
            $card.backgroundColor = 'rgb(153, 153, 153)';
            $card.color = 'rgb(204, 204, 204)';
            $flippedCards.length = 0;
        } else { 
            $card.text = "";
            $card.backgroundColor = 'rgb(32, 64, 86)';
            $card.data('flipped', false);
            $flippedCards.length = 0;
        }
    } else { 
        return;
    };
    
    console.log('Flipped cards after last if ' + $flippedCards);
    
    };