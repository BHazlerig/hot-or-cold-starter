
$(document).ready(function(){
	
  
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


   var randomNumber = Math.floor(Math.random()*100);
   
   $(".new").click(function(){
      $("#feedback").html("New Game..Good luck!");
        $("#guessList li").remove();
        
      randomNumber = Math.floor(Math.random()*100);
   	});

  	$(".button").click(function(){
    var guess = $("#userGuess").val();
    var n = $("#userGuess").length;
     $("#count").html(n);
    
     $("#guessList").append('<li>' + guess + '</li>');
   
     if ( guess > 0 && guess < 101 ) {
        if (guess > randomNumber) {
          $("#feedback").html('Your guess is too high' + randomNumber);
        }
        else if (guess < randomNumber) {
          $("#feedback").html('Your guess is too low' + randomNumber);
        }
        else if (guess == randomNumber) {
         $("#feedback").html('You got it!');
        }
        else {
		alert("Please enter a number between 1 and 100");
	    }
	 }
  	});

});


