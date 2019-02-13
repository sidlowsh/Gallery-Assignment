//document ready function
$(document).ready() {
//define your variables
	var slide = $(".slide");

	//set the index slide (number) where we start
	var slideIndex = 0;

	//set the current slide based on the index
	var currentImage = 1;

//select (not the method) all the slides (value of the variable will be an array)

	
function advanceSlide
	//hide all slides except for the one we want to see
		//
	//move in specified direction
	//return to opposite (reset) -- 5 goes back to 1, 1 goes back to 5

	//INSTRUCTIONS
	//hide all the slides
	//show the first (.first) slide
	//when the user clicks "next"
		//hide current slide
		//increment the slide index 
		slideIndex++;
		//conditional check of the slideIndex
			//(if greater than 4, reset to 0)
			//slideIndex = slideIndex - 1
			//set the currentSlide based on the newly incremented slideIndex
			//show the next
	//when the user clicks "previous"
		//hide current slide
		//increment the slide index 
		slideIndex--;
		//conditional check of the slideIndex
			//(if less than 0, reset to 4)
			//set the currentSlide based on the newly incremented slideIndex
			//show the next

// close the document ready function
};