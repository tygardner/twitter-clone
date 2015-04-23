$(document).ready(function(){ 
	jQuery("abbr.timeago").timeago();

	$('#tweet-submit, #char-count').hide(); //Hide the tweet button 

	$('#tweet-content').find('.tweet-compose').on('click', function(){ //Expand tweet box and show button
 		$(this).css({
 			height: '100px'
		})
		$('#tweet-submit, #char-count').show();
	});

var characters= 140;  //Count down the character count 
	$(".tweet-compose").keyup(function(){
    	if($(this).val().length > characters){
        	$(this).val($(this).val().substr(0, characters));
		}
	$('#char-count').text(characters - $('.tweet-compose').val().length);   //Change the color of the character count 
		if(Number($('#char-count').text()) <= 10) {
			$('#char-count').css("color", "red");
		} else {
			if(Number($('#char-count').text()) >= 10) {
				$('#char-count').css("color", "#8B99A6"); 
			}
		}

	if(Number($('#char-count').text()) <= 0){ //Tweet button disables when you get to 0 Character count
		$('#tweet-submit').prop('disabled',true)   
	}
	if(Number($('#char-count').text()) > 0){
		$('#tweet-submit').prop('disabled',false)
	}
});

$('.button').on('click', function(){ //creates new tweet on click
    if($('.tweet-compose').val().length !== 0){
        var newTweet = $('.tweet').first().clone('data');
        newTweet.find('.avatar').attr('src', 'img/alagoon.jpg');
        newTweet.find('.fullname').html('Your name here');
        newTweet.find('.username').html('@urnamehere');
        newTweet.find('.tweet-text').text($('.tweet-compose').val());
        $('#stream').prepend(newTweet);
    }
});

$('.tweet-actions').hide(); //Hides the data of a submitted tweet
$('.tweet').hover(function(){
	$(this).find('.tweet-actions').show();
	}, function(){
	$(this).find('.tweet-actions').hide();
});

$('.stats').hide();
$('.reply').hide();

$('#main').on('click', function() { //Shows the data of a tweet when clicked
	$('.tweet').on('click', function(){
		$('.stats').hide();
		$('.reply').hide();
		$(this).find('.stats').show();
		$(this).find('.reply').show();
	})
})






});//document end tag