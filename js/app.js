/* jshint browser: true */
window.addEventListener('load', function(event) {
  var divText = document.getElementById('set-text');
  var btnTweet = document.getElementById('submit');
  var divTweet = document.getElementById('text-tweet');
  var labelCount = document.getElementById('count');
  /*V 0.0.1 - evento click, obtener el texto y agregar el texto al HTML.*/  
  btnTweet.addEventListener('click', function(event) {
    var cloneText = divText.cloneNode(true);
    var tweet = divTweet.appendChild(cloneText); 
    cloneText.removeAttribute('placeholder');
    cloneText.removeAttribute('contenteditable');
    cloneText.classList.remove('editable');
    divTweet.insertBefore(tweet,divTweet.childNodes[1]).classList.add('my-tweets');
    divText.innerHTML = '';
    /*V 0.0.2 - No ingresar texto vacío (deshabilitar el botón de "twittear"),contador de caracteres de forma regresiva*/  
    if (cloneText.innerHTML === '') {
      divTweet.insertBefore(tweet,divTweet.childNodes[1]).classList.remove('my-tweets');
    } else {
      btnTweet.disabled = false;
      btnTweet.classList.remove('disable-btn');
      btnTweet.classList.add('enable-btn');
      divTweet.insertBefore(tweet,divTweet.childNodes[1]).classList.add('my-tweets');
      divText.innerHTML = '';
    }
  });
  divText.addEventListener('keydown', function(event) {
    var initial = '';
    var caracteres = divText.innerHTML;
    if (true) {
      labelCount.innerHTML = caracteres.length + 1;
    } else {
      labelCount.innerHTML = caracteres.length - caracteres.length;  
    }
  });
  
  
});

