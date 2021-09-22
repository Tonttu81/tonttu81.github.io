var slideIndex = [1,1,1,1,1];
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5"];
showSlides(1, 0);
//showSlides(1, 1);
//showSlides(1, 2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]); // Gets all pictures from one slideshow
  if (n > x.length) { //If the id of the picture is more than how many pictures there are, go back to the first picture
    slideIndex[no] = 1
  }    
  if (n < 1) { //If the id of the picture is less than the first picture, go to the last picture
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  } 
  console.log(x);
  console.log(x.length);
  //x[1].style.display = block;
  x[slideIndex[no]-1].style.display = "block"; 
}

/*var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("image");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
*/