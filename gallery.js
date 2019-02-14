//document ready function
$(document).ready(function() {
    setImageNumber();
	var slide = $('.slide')//define variables
	var currentImage = 1;
	var totalImages = slide.length;


	$('.slide').not(':first').hide();//hide all images except first one





/** $(document).ready(function() {
	
	//define your variables
	var slides = $('.slide');

	var slideIndex = 0;//set the index slide (number) where we start

	var currentSlide = 1;//set the current slide based on the index

	//select (not the method) all the slides (value of the variable will be an array)
	slides = [0, 1, 2, 3, 4];


	
	slides.hide();//hide all the slides
	

	//show the first (.first) slide
	//$(slides[0]).show();

	//when the user clicks "next"
	//	function nextImage(){
	//		$('.next').click() {
	//		//hide current slide
	//		$('current slide').hide();
	//		//increment the slide index 
	//		$('slideIndex').slideIndex++;
	//		};
	//	

		
		
		
		//conditional check of the slideIndex
			//(if greater than 4, reset to 0)
			//slideIndex = slideIndex - 1
			//set the currentSlide based on the newly incremented slideIndex
			//show the next
	//when the user clicks "previous"
		//hide current slide
		//increment the slide index 
		//slideIndex--;
		//conditional check of the slideIndex
			//(if less than 0, reset to 4)
			//set the currentSlide based on the newly incremented slideIndex
			//show the next
	//function nextImage(){
		//if (i>image.length) {
		//	i= i+1;
		//} else {
		//	i = 1;
		//}
		//	slider_content.innerHTML = "<img"
	//}



// close the document ready function
});