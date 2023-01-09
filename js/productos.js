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
  /*Nombre*/
  if (document.miformulario.nombre.value =='' || document.miformulario.nombre.value.length <= 4) {
    alert('No has rellenado el campo nombre');
    alert('Este campo debe contener mínimo 4 caracteres')
  } else {
    document.form[0].submit();
  }
 /*Apellidos*/
  if (document.miformulario.apellidos.value == '' || document.miformulario.value.length <=4) {
    alert('No has rellenado el campo apellidos');
    alert('Este campo debe contener mínimo 4 caracteres');
  } else {
    document.form[1].submit();
  }
  /*Email*/
  if (document.miformulario.email =='') {
    alert('El correo está vacío');
    
  }else{
    var email=document.miformulario.email.value;
    var expreg=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

      if (!(expreg.test(email))) {
        alert("El email es incorrecto");
        
      }else{
        document.form[4].submit();
      }
  }
  /*Sugerencias*/
  if (document.miformulario.sugerencias.value =='') {
    alert('Las sugerencias están vacías, introduzca texto');
    
  }else{

    if (document.miformulario.sugerencias.value.length <=400);
    document.form[12].submit();
  }
  /*dni*/

  if (document.miformulario.dni.value =='') {
    alert('Introduzca su DNI')
    
  } else {

    var dni = document.miformulario.dni.value;
    var expreg = /^\d{8}[A-Z]$/;

    if (!(expreg.test(dni))) {
        alert('El DNI es incorrecto');
      
    }else{
      document.form[5].submit();
    }
    
  }

}

/*efecto máquina de escribir*/

