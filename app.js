//IMAGE SLIDESHOW

let slideIndex = 1;
showSlides(slideIndex);
/*The slideIndex variable is a marker for which image is
 currently being shown (Ex; if slideIndex= 1, it will show the first image. */

// Next/previous controls (arrow) (function triggered by the L/R arrows of image)
function plusSlides(n) {
  //Increase the slide index by 1 and show that slide
  showSlides((slideIndex += n));
}

// Thumbnail image controls (currentSlide = dots) (function triggered by the 3 dots below image)
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Function to toggle correct slides
function showSlides(n) {
  let i;
  //All of the slides in the document
  let slides = document.getElementsByClassName("slides");
  // All of the slide dots in the document
  let dots = document.getElementsByClassName("dot");
  // If slide # is greater than the total number of slides
  if (n > slides.length) {
    slideIndex = 1;
  }
  // If slide # is less than total number of slides
  if (n < 1) {
    slideIndex = slides.length;
  }
  // Hide each of the slides, therefore the "none"
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Replace each of the dots with the class "active" with ""
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // Set the current slide to display as a block element
  slides[slideIndex - 1].style.display = "block";
  // Set the current slide's respective dot to the "active" class
  dots[slideIndex - 1].className += " active";
}
