//document ready function
$(document).ready(function() {
    setImageNumber();
	var slide = $('.slide')//define variables
	var currentImage = 1;
	var totalImages = slide.length;


	$('.slide').not(':first').hide();//hide all images except first one
	$('.previous').on('click', function(){
        // Change to the previous image
        
        $('.slide' + currentImage).stop().fadeOut(1);
        decreaseImage();
        $('.slide' + currentImage).stop().fadeIn(1);
    }); 
$('.next').on('click', function(){
    // Change to the next image
    $('.slide' + currentImage).stop().fadeOut(1);
    increaseImage();
    $('.slide' + currentImage).stop().fadeIn(1);

  }); 


	function increaseImage() {
    /* Increase currentImage by 1.
    * Resets to 1 if larger than totalImages
    */
  ++currentImage;
    if(currentImage > totalImages) {
      currentImage = 1;
    }
  }
  function decreaseImage() {
    /* Decrease currentImage by 1.
    * Resets to totalImages if smaller than 1
    */
    --currentImage;
    if(currentImage < 1) {
      currentImage = totalImages;
    }
  }
  	function setImageNumber() {
        var count = 1;
      $(".slide").each(function(){
          var cl = 'slide'+count;
          $(this).addClass(cl);
          count++;
        });
    }

});