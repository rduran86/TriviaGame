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
	askedQuestions: [],
	questionAnswered: false,
	count: 10,
	unanswered: 0,
	//methods
	start: function(){
		$("#start").show();
		$("#start").html("Start");
		$("#question").hide();
		$("#option1").hide();
		$("#option2").hide();
		$("#option3").hide();
		$("#unanswered").hide();
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
		$("#timeRemaining").empty();
		$("#unanswered").show();
		$("#unanswered").html("Unanswered questions: " + trivia.unanswered);
	},

	choices:function(){	

		//pick a random number betwen 1 and 5 
		trivia.randomQuestion = Math.floor(Math.random() * 6);
		
		// Check if the random number is on the asked questions array
		for (i= 0; i < trivia.askedQuestions.length; i++){
			if(trivia.randomQuestion === trivia.askedQuestions[i]){
				trivia.questionAnswered = true;
				break;
			}
			else{
				trivia.questionAnswered = false;
			}
		}

		//if the random number for the question is 0 pick again
		while(trivia.randomQuestion === 0 || trivia.questionAnswered){
			trivia.randomQuestion = Math.floor(Math.random() * 6);
			// Check if the random number is on the asked questions array
			for (i= 0; i < trivia.askedQuestions.length; i++){
				if(trivia.randomQuestion === trivia.askedQuestions[i]){
					trivia.questionAnswered = true;
					break;
				}
				else{
					trivia.questionAnswered = false;
				}
			}

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
		//Push the random question into the asked questions array 
		trivia.askedQuestions.push(trivia.randomQuestion);
		console.log(trivia.question);
		trivia.count = 10;
}
		

};

//once doc is loaded start functionality
window.onload = function(){	

	userChoice = "";
	var counter;

	//timer function
	function timer(){
		trivia.count -= 1;
		if(trivia.count === 0){
			trivia.unanswered++;
			$("#timeRemaining").html("Time is up");
			//clearInerval(counter);
			//Show the correct answer if the time is up 
			switch(trivia.randomQuestion){
			case 1:	
			$("#question").html("The correct answer was " + trivia.answer1 );
			break;
			case 2:	
			$("#question").html("The correct answer was " + trivia.answer2 );
			break;
			case 3:	
			$("#question").html("The correct answer was " + trivia.answer3 );
			break;
			case 4:	
			$("#question").html("The correct answer was " + trivia.answer4 );
			break;
			case 5:	
			$("#question").html("The correct answer was " + trivia.answer5 );
			break;
			default:
			break;

		}
		if(trivia.askedQuestions.length === 5){
			console.log(trivia.askedQuestions);
			trivia.finalScreen();

		}
		else{
		setTimeout(function(){
				$("#timeRemaining").empty();
				trivia.choices();
			}, 3000)
		} //closing bracket for trivia.askedQuestions length equals  0

		}// closing bracket for if trivia count equals 0
		if(trivia.count > 0){
		$("#timeRemaining").html("Time Remaining " + trivia.count + " seconds" );
		}
		}
	//counter variable to call timer function every second
	

	//start 
	trivia.start();	
	
	$("#start").on("click", function(){
		trivia.choices();
		$("#start").hide();
		$("#question").show();
		$("#option1").show();
		$("#option2").show();
		$("#option3").show();

		counter = setInterval(timer, 1000);

	});


	$("#option1").on("click", function(){
		//clear content on time remaining 
		$("#timeRemaining").empty();
		// set count to 0 so to avoid writing to #timeRemaining
		trivia.count = 0;	


		if(trivia.askedQuestions.length < 5){
			
			//Get user choice
			userChoice = trivia.option1;
			console.log(userChoice);

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
				setTimeout(function(){
					$("#question").html("The correct answer is : " + trivia.answer1);},1000);
				setTimeout(trivia.choices, 3000);
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
				setTimeout(function(){
					$("#question").html("The correct answer is : " + trivia.answer2);},1000);
				setTimeout(trivia.choices, 3000);
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
				setTimeout(function(){
					$("#question").html("The correct answer is : " + trivia.answer3);},1000);
				setTimeout(trivia.choices, 3000);
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
				setTimeout(function(){
					$("#question").html("The correct answer is : " + trivia.answer4);},1000);
				setTimeout(trivia.choices, 3000);
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
				setTimeout(function(){
					$("#question").html("The correct answer is : " + trivia.answer5);},1000);
				setTimeout(trivia.choices, 3000);
				}
			
			}
		}
		else{
		trivia.finalScreen();
			}
	});

	$("#option2").on("click", function(){
		//clear content on time remaining 
		$("#timeRemaining").empty();
		// set count to 0 so to avoid writing to #timeRemaining
		trivia.count = 0;	

	if(trivia.askedQuestions.length < 5){
		
	
		userChoice = trivia.option2;
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
				setTimeout(function(){
					$("#question").html("The correct answer is : " + trivia.answer1);},1000);
				setTimeout(trivia.choices, 3000);
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
			setTimeout(function(){
				$("#question").html("The correct answer is : " + trivia.answer2);},1000);
			setTimeout(trivia.choices, 3000);
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
			setTimeout(function(){
				$("#question").html("The correct answer is : " + trivia.answer3);},1000);
			setTimeout(trivia.choices, 3000);
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
			setTimeout(function(){
				$("#question").html("The correct answer is : " + trivia.answer4);},1000);
			setTimeout(trivia.choices, 3000);
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
			setTimeout(function(){
				$("#question").html("The correct answer is : " + trivia.answer5);},1000);
			setTimeout(trivia.choices, 3000);
		}
		
		}
	}
	else{
		trivia.finalScreen();
	}

	});


	$("#option3").on("click", function(){
		//clear content on time remaining 
		$("#timeRemaining").empty();
		// set count to 0 so to avoid writing to #timeRemaining
		trivia.count = 0;	

	if(trivia.askedQuestions.length < 5){
		

		userChoice = trivia.option3;

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
			setTimeout(function(){
				$("#question").html("The correct answer is : " + trivia.answer1);},1000);
			setTimeout(trivia.choices, 3000);
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
			setTimeout(function(){
				$("#question").html("The correct answer is : " + trivia.answer2);},1000);
			setTimeout(trivia.choices, 3000);
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
			setTimeout(function(){
				$("#question").html("The correct answer is : " + trivia.answer3);},1000);
			setTimeout(trivia.choices, 3000);
		}
				
	}

	else if(trivia.randomQuestion === 4){
		if(trivia.answer4 === userChoice){
			$("#question").html("Correct!")
			trivia.correctAnswers ++;
			setTimeout(trivia.choices, 3000);	
		}
		else{
			$("#question").html("Better luck next time")
			trivia.incorrectAnswers ++;
			setTimeout(function(){
				$("#question").html("The correct answer is : " + trivia.answer4);},1000);
			setTimeout(trivia.choices, 3000);
		}
	
	}

	else if(trivia.randomQuestion === 5){
		if(trivia.answer5 === userChoice){
			$("#question").html("Correct!")
			trivia.correctAnswers ++;		
			setTimeout(trivia.choices, 3000);
		}
		else{
			$("#question").html("Better luck next time")
			trivia.incorrectAnswers ++;
			setTimeout(function(){
				$("#question").html("The correct answer is : " + trivia.answer5);},1000);
			setTimeout(trivia.choices, 3000);
		}
	
	}		

	}
	else{
		trivia.finalScreen();
	}


	if(trivia.askedQuestions.length == 5){
		trivia.correctAnswers = 0
		trivia.incorrectAnswers = 0
		trivia.askedQuestions = [];
		$("#option2").removeClass("btn-danger");
		trivia.choices();
		trivia.count = 10;
	}	
	
	
	});



} //final closing curly bracket



