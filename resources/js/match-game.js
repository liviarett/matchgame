// Indicate that the user won when all pairs have been found
/* Add a "Restart Game" button
Add score or time
Allow user to select from multiple board sizes
Add sound effects
Add flipping animations */

$(document).ready(function() {
    MatchGame.generateCardValues();
    MatchGame.renderCards(cardValues, $('#game'));

// CLICK FUNCTIONS

    $('.playagain').click(function() {
    MatchGame.generateCardValues();
    MatchGame.renderCards(cardValues, $('#game')); 
    $('.playagain').css('visibility', 'hidden');
        clicks = 0;
        $('.score').text('Score: ' + clicks)
        if ($(window).width() <= 750){	
    $('.playagain').css('display', 'none');
    $('.playvideo').css('display', 'none');	}
    });

    $('.playvideo').click(function() {
        if ($(window).width() <= 900){
     window.open("https://www.youtube.com/embed/LQJyBnJzCEw?autoplay=1","_blank")
    } else {
    $('iframe').fadeIn(500);
    $('.closevideo').fadeIn(500);
    $('.whitescreen').fadeIn(500);
    $('.closevideo').css('display', 'flex');
    $('.whitescreen').css('display', 'flex')    
    $('iframe').attr('src', 'https://www.youtube.com/embed/LQJyBnJzCEw?autoplay=1');    
    }
    });
    
    $('.closevideo').click(function() {
    $('iframe').attr('src', $('iframe').attr('src'));        
    $('iframe').css('display', 'none');
    $('.closevideo').css('display', 'none');
    $('.whitescreen').css('display', 'none');
    $('iframe').attr('src', 'https://www.youtube.com/embed/LQJyBnJzCEw?autoplay=0');    
    });
    });

var MatchGame = {};
var cardValues = [];
var $allFlipped = [];
var clicks = 0;

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
        $card.css('background-position', Math.floor(Math.random() * (600 - 10 + 1) + 10) + 'px');
        $game.append($card);
    };
    
    $('.card').on('click',function() {
     MatchGame.flipCard($(this),$('#game'))
    });
};
/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {
   
    var $flippedCards = $game.data('flippedCards');
        
    if ($card.data('flipped')) {
        
        return;
        
    } else {
        //if card not flipped, flip
        $card.data('flipped', true);
        $card.removeClass('img-background');
        if ($card.data('value') === 1) {
            $card.html('<img class="imgvalue" src="resources/Images/value1.jpg" />');
        } else if ($card.data('value') === 2) {
            $card.html('<img class="imgvalue" src="resources/Images/value2.jpg" />');
        } else if ($card.data('value') === 3) {
            $card.html('<img class="imgvalue" src="resources/Images/value3.jpg" />');
        } else if ($card.data('value') === 4) {
            $card.html('<img class="imgvalue" src="resources/Images/value4.jpg" />');
        } else if ($card.data('value') === 5) {
            $card.html('<img class="imgvalue" src="resources/Images/value5.jpg" />');
        } else if ($card.data('value') === 6) {
            $card.html('<img class="imgvalue" src="resources/Images/value6.jpg" />');
        } else if ($card.data('value') === 7) {
            $card.html('<img class="imgvalue" src="resources/Images/value7.jpg" />');
        } else if ($card.data('value') === 8) {
            $card.html('<img class="imgvalue" src="resources/Images/value8.jpg" />');
        };
        //$card.css('background-color', $card.data('color'));
        //$card.text($card.data('value'));
        $flippedCards.push($card);
    };
        
    if ($flippedCards.length === 2) {
        clicks = clicks + 1;
        $('.score').text('Score: ' + clicks); 
        var $card1 = $flippedCards[0];
        var $card2 = $flippedCards[1];
        if ($card1.data('value') === $card2.data('value')) {
            $('#game').append('<div class="noclick"></div>');
            setTimeout(function() {
            $flippedCards.length = 0;
            $allFlipped.push(1);
            }, 350);
            setTimeout(function() {
                $('.noclick').remove();
            }, 350);
         } else { 
            $('#game').append('<div class="noclick"></div>'); 
            setTimeout(function() {
            $card1.text('');
            $card2.text('');
            $card1.addClass('img-background');
            $card2.addClass('img-background');
            $card1.data('flipped', false);
            $card2.data('flipped', false);
            $flippedCards.length = 0;
            }, 600);
            setTimeout(function() {
            $('.noclick').remove();
            }, 600);
    }
    } else { 
        return;
    };
    
    
    if ($allFlipped.length === 7) {
        $allFlipped.length = 0;
        $('.playagain').css('visibility', 'visible');
        $('.playvideo').css('visibility', 'visible');
        $('.playagain').css('display', 'block');
        $('.playvideo').css('display', 'block');
       } else {
            return;
        };
    };
    
