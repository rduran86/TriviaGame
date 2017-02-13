//JS For Trivia Game 

/* 
REQUIREMENTS
1. show question until the player answers or the time runs out 
2. if a player chooses the right answer show a screen congratulating him
a few seconds later display the next question
3. The scenario is similar for wrong ansers and time outs:
	a) if the player runs out of time tell the plater time is up and show the correct answer
	wait a few seconds and display the next question 
	b) if the player chooses the wrong answer tell the player they selected the wrong option 
	then display the correct answer wait a few seconds then show the correct answer 
4. on the final screen show the number of correct answers, incorrect answers and an option to restart the game 
*/

//Define game object

var trivia = {

	//Questions and answers 
	question1: "What has been around for a million years but is only a month old?",
	answer1: "The moon",
	question2:"What gets wetter as it dries?",
	answer2:"The towel",
	question3: "What falls but never breaks and what breaks but never falls?",
	answer3: "The night and day",
	question4: "What demands an answer but asks no question?",
	answer4: "The telephone",
	question5: "What is so fragile that when you say its name you break it?",
	answer5: "The silence",
	correctAnswers: 0,
	incorrectAnswers: 0,
	randomQuestion: 0,
	newQuestion:"",
	option1:"",
	option2:"",
	option3:"",
	answeredQuestions: 0,

	//methods
	start: function(){
		trivia.choices();
	},

	changeQuestion: function(newQuestion, option1, option2, option3){
		$("#question").html(newQuestion);
		$("#option1").html(option1);
		$("#option1").addClass("btn-info");
		$("#option1").removeClass("btn-success");
		$("#option2").html(option2);
		$("#option2").removeClass("btn-success");
		$("#option3").html(option3);
	},
	finalScreen: function(){
		$("#question").html("Score: ");
		$("#option1").removeClass("btn-info");
		$("#option1").addClass("btn-success");
		$("#option1").html("correct answers: " + trivia.correctAnswers);
		$("#option2").addClass("btn-danger");
		$("#option2").html("incorrect answers: " + trivia.incorrectAnswers);
		$("#option3").html("Play again?");
	},

	choices:function(){	

		trivia.randomQuestion = Math.floor(Math.random() * 6);
		//if the random number for the question is 0 pick again
		while(trivia.randomQuestion === 0){
			trivia.randomQuestion = Math.floor(Math.random() * 6);
		}
		console.log(trivia.randomQuestion);
		switch(trivia.randomQuestion){
			case 1:
			trivia.question = trivia.question1;
			trivia.option1 = "The sun";
			trivia.option2 = trivia.answer1;
			trivia.option3 = "The stars"; 
			break;
			
			case 2:
			trivia.question = trivia.question2;
			trivia.option1 = "The sponje";
			trivia.option2 = trivia.answer2;
			trivia.option3 = "The sand"; 
			break;

			case 3:
			trivia.question = trivia.question3;
			trivia.option1 = trivia.answer3;
			trivia.option2 = "The dawn";
			trivia.option3 = "The wind"; 
			break;

			case 4:
			trivia.question = trivia.question4;
			trivia.option1 = "The door";
			trivia.option2 = "The ring bell";
			trivia.option3 = trivia.answer4; 
			break;

			case 5:
			trivia.question = trivia.question5;
			trivia.option1 = trivia.answer5;
			trivia.option2 = "The crystal";
			trivia.option3 = "The rose"; 
			break;

			default:
			break;
			
		}	
		trivia.changeQuestion(trivia.question, trivia.option1, trivia.option2, trivia.option3);
			console.log(trivia.question);
}
		

};

//once doc is loaded start functionality
window.onload = function(){	

	userChoice = "";
	//start the game with a random question
	trivia.choices();	
	//Get user choice
		 
	// if the user takes more than 8 seconds to choose option question will change
	// intervalId = setTimeout(function(){
	// 	trivia.choices();
	// } , 8000)	

	$("#option1").on("click", function(){
		if(trivia.answeredQuestions < 5){
	
			userChoice = trivia.option1;
			console.log(userChoice);
			trivia.answeredQuestions ++;

		// Check if user chose the correct answer 
		if(trivia.randomQuestion === 1){
			if(trivia.answer1 === userChoice){
				$("#question").html("Correct!")
				trivia.correctAnswers ++;
				setTimeout(trivia.choices, 2000);	
			}
			else{
				$("#question").html("Better luck next time")
				trivia.incorrectAnswers ++;
				setTimeout(trivia.choices, 2000);
			}
				
		}
		else if(trivia.randomQuestion === 2){
			if(trivia.answer2 === userChoice){
				$("#question").html("Correct!")
				trivia.correctAnswers ++;
				setTimeout(trivia.choices, 2000);
			}
			else{
				$("#question").html("Better luck next time")
				trivia.incorrectAnswers ++;
				setTimeout(trivia.choices, 2000);
			}
		
		}

		else if(trivia.randomQuestion === 3){
			if(trivia.answer3 === userChoice){
				$("#question").html("Correct!")
				trivia.correctAnswers ++;
				setTimeout(trivia.choices, 2000);
			}
			else{
				$("#question").html("Better luck next time")
				trivia.incorrectAnswers ++;
				setTimeout(trivia.choices, 2000);
			}
		
		
		}

		else if(trivia.randomQuestion === 4){
			if(trivia.answer4 === userChoice){
				$("#question").html("Correct!")
				trivia.correctAnswers ++;		
				setTimeout(trivia.choices, 2000);
			}
			else{
				$("#question").html("Better luck next time")
				trivia.incorrectAnswers ++;
				setTimeout(trivia.choices, 2000);
			}
		
		}

		else if(trivia.randomQuestion === 5){
			if(trivia.answer5 === userChoice){
				$("#question").html("Correct!")
				trivia.correctAnswers ++;
				setTimeout(trivia.choices, 2000);
			}
			else{
				$("#question").html("Better luck next time")
				trivia.incorrectAnswers ++;
				setTimeout(trivia.choices, 2000);
				}
			
			}
		}
		else{
		trivia.finalScreen();
			}
	});

	$("#option2").on("click", function(){

	if(trivia.answeredQuestions < 5){
	
		userChoice = trivia.option2;
		trivia.answeredQuestions ++;
		// Check if user chose the correct answer 
		if(trivia.randomQuestion === 1){
			if(trivia.answer1 === userChoice){
				$("#question").html("Correct!")
				trivia.correctAnswers ++;
				setTimeout(trivia.choices, 2000);
			}
			else{
				$("#question").html("Better luck next time")
				trivia.incorrectAnswers ++;
				setTimeout(trivia.choices, 2000);
			}
		
		}

	else if(trivia.randomQuestion === 2){
		if(trivia.answer2 === userChoice){
			$("#question").html("Correct!")
			trivia.correctAnswers ++;	
			setTimeout(trivia.choices, 2000);
		}
		else{
			$("#question").html("Better luck next time")
			trivia.incorrectAnswers ++;
			setTimeout(trivia.choices, 2000);
		}
	
	}

	else if(trivia.randomQuestion === 3){
		if(trivia.answer3 === userChoice){
			$("#question").html("Correct!")
			trivia.correctAnswers ++;
			setTimeout(trivia.choices, 2000);	
		}
		else{
			$("#question").html("Better luck next time")
			trivia.incorrectAnswers ++;
			setTimeout(trivia.choices, 2000);
		}
	
	}

	else if(trivia.randomQuestion === 4){
		if(trivia.answer4 === userChoice){
			$("#question").html("Correct!")
			trivia.correctAnswers ++;
			setTimeout(trivia.choices, 2000);
		}
		else{
			$("#question").html("Better luck next time")
			trivia.incorrectAnswers ++;
			setTimeout(trivia.choices, 2000);
		}
	
			
	}

	else if(trivia.randomQuestion === 5){
		if(trivia.answer5 === userChoice){
			$("#question").html("Correct!")
			trivia.correctAnswers ++;
			setTimeout(trivia.choices, 2000);
		}	
		else{
			$("#question").html("Better luck next time")
			trivia.incorrectAnswers ++;
			setTimeout(trivia.choices, 2000);
		}
		
		}
	}
	else{
		trivia.finalScreen();
	}

	});


	$("#option3").on("click", function(){

	if(trivia.answeredQuestions < 5){

		userChoice = trivia.option3;
		trivia.answeredQuestions ++;

		// Check if user chose the correct answer 
	if(trivia.randomQuestion === 1){
		if(trivia.answer1 === userChoice){
			$("#question").html("Correct!")
			trivia.correctAnswers ++;
			setTimeout(trivia.choices, 2000);
		}
		else{
			$("#question").html("Better luck next time")
			trivia.incorrectAnswers ++;
			setTimeout(trivia.choices, 2000);
		}

	}

	else if(trivia.randomQuestion === 2){
		if(trivia.answer2 === userChoice){
			$("#question").html("Correct!")
			trivia.correctAnswers ++;
			setTimeout(trivia.choices, 2000);	
		}
		else{
			$("#question").html("Better luck next time")
			trivia.incorrectAnswers ++;
			setTimeout(trivia.choices, 2000);
		}
	

	}

	else if(trivia.randomQuestion === 3){
		if(trivia.answer3 === userChoice){
			$("#question").html("Correct!")
			trivia.correctAnswers ++;
			setTimeout(trivia.choices, 2000);
		}
		else{
			$("#question").html("Better luck next time")
			trivia.incorrectAnswers ++;
			setTimeout(trivia.choices, 2000);
		}
				
	}

	else if(trivia.randomQuestion === 4){
		if(trivia.answer4 === userChoice){
			$("#question").html("Correct!")
			trivia.correctAnswers ++;
			setTimeout(trivia.choices, 2000);	
		}
		else{
			$("#question").html("Better luck next time")
			trivia.incorrectAnswers ++;
			setTimeout(trivia.choices, 2000);
		}
	
	}

	else if(trivia.randomQuestion === 5){
		if(trivia.answer5 === userChoice){
			$("#question").html("Correct!")
			trivia.correctAnswers ++;		
			setTimeout(trivia.choices, 2000);
		}
		else{
			$("#question").html("Better luck next time")
			trivia.incorrectAnswers ++;
			setTimeout(trivia.choices, 2000);
		}
	
	}		

	}
	else{
		trivia.finalScreen();
	}


	if(trivia.answeredQuestions == 5){
		trivia.correctAnswers = 0
		trivia.incorrectAnswers = 0
		trivia.answeredQuestions = 0
		$("#option2").removeClass("btn-danger");
		trivia.choices();
	}	
	
	
	});



} //final closing curly bracket



