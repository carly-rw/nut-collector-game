
$("document").ready(function(){     

	var wins = 0;
	var losses = 0;
	var nutArray = ["assets/images/almonds.jpg", "assets/images/cashews.jpg", "assets/images/hazelnut.jpg", "assets/images/walnuts.jpg"];
	var userScore;
	var randomNumber;

	var newNutGame = function() {
		$(".nutSack").empty();
		$(".total-score").empty();
		userScore = 0; //resets the user's score to 0
		randomNumber = (Math.floor(Math.random() * 120) + 19); //recreates the randomNumber for the user
		console.log(userScore);
		console.log(randomNumber);

		$(".blink").html(randomNumber); //shows the score the user must try to obtain
		$("#total-score").html(userScore);

		for (var i = 0; i < nutArray.length; i++) { //loops through and creates the images with values
			var nutValue = Math.round(Math.random() * 12) + 1;
			console.log(nutValue);
			var a = $("<img>");
			a.attr("value", nutValue);
			a.addClass("nut");
			a.attr("src", nutArray[i]);
			a.attr("alt", "nut image");
			$(".nutSack").append(a);
		}
	}

	$(document).on("click", ".nut", function() {
		var nutso = $(this).attr("value");
		userScore += parseFloat(nutso);
		console.log(userScore);
		$(".score").html(userScore);

		if (userScore === randomNumber) {
		wins++;
		$(".wins").html(wins);
		alert("Congrats! You won!");
		newNutGame();
		}
		
		if (userScore > randomNumber) {
		losses++;
		alert("Sorry! You lost! Your total score was " + userScore);
		$(".losses").html(losses);
		newNutGame();
		}
	});	

newNutGame();

}); //end document ready