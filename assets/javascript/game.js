
$('document').ready(function() {     
// At the start of the game (page loaded):  
	var wins = 0;
	var losses = 0;
	$(".wins").text(wins);
	$(".losses").text(losses);

	var nutArray = ["assets/images/hazelnut.jpg", "assets/images/peanuts.jpg", "assets/images/pecan.jpg", "assets/images/walnut.jpg"];

// Generate the values of the crystals: 
	var generateNutValue = function() {
		for (var i = 0; i < nutArray.length; i++) {
			var nutValue = Math.floor(Math.random() * 12) + 1;
			$(".nutSack").append("<img src="nutArray[i]">");
			$("<img>").attr("value", nutValue);
			$("<img>").addClass(".nut");
		}

	var newNutGame = function() {
		var userScore = 0;
		$(".total-score").html(userScore);

		var randomNumber = Math.floor(Math.random() * 120) + 19;
		$(".randomNumber").text(randomNumber);

		while (userScore < randomNumber) {
			$(".nut").on("click", function() {
				var userScore = $(this.)attr("value");
				$(".total-score").html(userScore);
			}	
		} 

		if (userScore === randomNumber) {
			wins++;
			$(".wins").text(wins);
			newNutGame();
		}
		
		if (userScore > randomNumber) {
			losses++;
			$(".losses").text(losses);
			newNutGame();
		}
	}
		

// The player clicks on a crystal and the value of the crystal is assigned to the player's score


// When the player clicks a crystal it will update the player's score counter

// The player will win if the total score matches the random number

// Player loses if score goes above the random number

// Game restarts whenever the player wins or loses

// When the game begins again, player should see new random number
	// Also, the crystals will have four new hidden values
	// User's score will reset to zero

// App shows number of games wins and loses

// Page does not refresh to start the game


}); //end document ready