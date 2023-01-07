let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("miSlider");
  let dots = document.getElementsByClassName("dot");
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

function comprobar(){

  if (document.miformulario.nombre.value =='' || document.miformulario.nombre.value.length <= 4) {
    alert('No has rellenado el campo nombre');
    alert('Este campo debe contener mínimo 4 caracteres')
  } else {
    document.form[0].submit();
  }

  if (document.miformulario.apellidos.value == '' || document.miformulario.value.length <=4) {
    alert('No has rellenado el campo apellidos');
    alert('Este campo debe contener mínimo 4 caracteres');
  } else {
    document.form[1].submit();
  }
}