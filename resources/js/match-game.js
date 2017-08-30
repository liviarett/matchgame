$(document).ready(function() {
    MatchGame.generateCardValues();
    MatchGame.renderCards(cardValues, $('#game'));
});

var MatchGame = {};
var cardValues = [];
var randomBackground = Math.floor(Math.random() * (1000 - 10 + 1) + 10) + 'px';
var $allFlipped = [];
/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
    cardValues = [];
    var orderedValues = [];
    
    for (var i = 1; i < 9; i++) {
        orderedValues.push(i);
        orderedValues.push(i);
    }
    
    while (orderedValues.length > 0) {
        var randomIndex = Math.floor(Math.random() * orderedValues.length);
       cardValues.push(orderedValues[randomIndex]);
        orderedValues.splice(randomIndex, 1);
    }
console.log(cardValues);
     return cardValues;
    
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
    var cardColours = [
        'hsl(25, 85%, 65%)', 
        'hsl(55, 85%, 65%)', 
        'hsl(90, 85%, 65%)', 
        'hsl(160, 85%, 65%)', 
        'hsl(220, 85%, 65%)', 
        'hsl(265, 85%, 65%)', 
        'hsl(310, 85%, 65%)', 
        'hsl(360, 85%, 65%)'];
    
    $game.empty();
    $game.data('flippedCards', []);

    for (var i = 0; i < cardValues.length; i++) {
        var $card = $('<div class="card col-xs-3"></div>');
        $card.data('value', cardValues[i]);
        $card.data('flipped', false);
        $card.data('color', cardColours[cardValues[i] - 1]);
        $card.addClass('img-background');
        $card.css('background-position', randomBackground);
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
   
    var $flippedCards = $game.data('flippedCards');
    
    console.log($card.data('flipped')); 
    console.log($card.data('value')); 
    console.log($card.data('color')); 
    
    if ($card.data('flipped')) {
        
        console.log('card already flipped'); 
        console.log($flippedCards);
        return;
        
    } else {
        
        $card.data('flipped', true);
        $card.removeClass('img-background');
        $card.css('background-color', $card.data('color'));
        $card.text($card.data('value'));
        $card.css('background-image', null);
        $flippedCards.push($card);
        
        console.log($flippedCards);

    };
        
    if ($flippedCards.length === 2) {
        var $card1 = $flippedCards[0];
        var $card2 = $flippedCards[1];
        
        if ($card1.data('value') === $card2.data('value')) {
            setTimeout(function() {
                $card1.css('background-color', 'rgb(153, 153, 153)');
            $card2.css('background-color', 'rgb(153, 153, 153)');
            $card1.css('color', 'rgb(204, 204, 204)');
            $card2.css('color', 'rgb(204, 204, 204)');
            $flippedCards.length = 0;
            $allFlipped.push(1);
            }, 350);
        } else { 
            setTimeout(function() {
            $card1.text('');
            $card2.text('');
            $card1.addClass('img-background');
            $card2.addClass('img-background');
            $card1.data('flipped', false);
            $card2.data('flipped', false);
            $flippedCards.length = 0;
            }, 600);
        }
    } else { 
        return;
    };
    
    if ($allFlipped.length === 8) {
        MatchGame.generateCardValues();
        MatchGame.renderCards(cardValues, $('#game'));
       } else {
            return;
        };
    };