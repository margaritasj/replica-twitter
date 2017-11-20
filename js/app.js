/* jshint browser: true */
window.addEventListener('load', function(event) {
  var divText = document.getElementById('set-text');
  var btnTweet = document.getElementById('submit');
  var divTweet = document.getElementById('text-tweet');
  var labelCount = document.getElementById('count');
  /* V 0.0.1 - evento click, obtener el texto y agregar el texto al HTML.*/  
  btnTweet.addEventListener('click', function(event) {
    var cloneText = divText.cloneNode(true);
    var tweet = divTweet.appendChild(cloneText); 
    cloneText.removeAttribute('placeholder');
    cloneText.removeAttribute('contenteditable');
    cloneText.classList.remove('editable');
    divTweet.insertBefore(tweet,divTweet.childNodes[1]).classList.add('my-tweets');
    divText.innerHTML = '';
    /* V 0.0.2 - No ingresar texto vacío (deshabilitar el botón de "twittear"),contador de caracteres de forma regresiva*/  
    if (cloneText.innerHTML === '') {
      divTweet.insertBefore(tweet,divTweet.childNodes[1]).classList.remove('my-tweets');
    } else {
      btnTweet.disabled = true;
      btnTweet.classList.add('disable-btn');
      btnTweet.classList.remove('enable-btn');
      divTweet.insertBefore(tweet,divTweet.childNodes[1]).classList.add('my-tweets');
      divText.innerHTML = '';
    }
  });
  divText.addEventListener('keydown', function(event) {
    var caracteres = divText.innerHTML;
    if (event) {
      labelCount.innerHTML = 140 - caracteres.length ;
      btnTweet.disabled = true;
      btnTweet.classList.remove('disable-btn');
      btnTweet.classList.add('enable-btn');
    /* V 0.0.3 */  
    //Si pasa los 140 caracteres, deshabilitar el botón.
    //Si pasa los 120 caracteres, mostrar el contador con OTRO color.
    //Si pasa los 130 caracteres, mostrar el contador con OTRO color
      if (caracteres.length <= 140 ) {
        btnTweet.disabled = false;
        labelCount.classList.add('black');
      } else {
        btnTweet.disabled = true;
        btnTweet.classList.remove('enable-btn');
        btnTweet.classList.add('disable-btn');
      }
      if ( 120 < caracteres.length && caracteres.length <= 130) {
        labelCount.classList.add('blue');
      } else if ( 130 < caracteres.length && caracteres.length <= 140 ) {
        labelCount.classList.add('orange');
      } else if (caracteres.length > 140) {
        labelCount.classList.add('red');
      } else {
        labelCount.classList.remove('red');
      }
    } 
  });



  
  
});

