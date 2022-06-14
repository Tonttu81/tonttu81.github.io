var slideIndex = [1,1,1,1,1];
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5"];

var pageOpen = false;

window.onload = function showAllSlides() {
  showSlides(1, 0);
  showSlides(1, 1);
  showSlides(1, 2);
  showSlides(1, 3);
  showSlides(1, 4);
}

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
  x[slideIndex[no]-1].style.display = "block"; 
}

function showPage(pageID) {
  if (pageOpen == false)
  {
    document.getElementById(pageID).className = "gamepagecontaineractive";
    pageOpen = true;
  }
}

function closePage(pageID) {
  pageOpen = false;
  document.getElementById(pageID).className = "gamepagecontainer";
}