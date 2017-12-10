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
		$allFlipped = [];
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
