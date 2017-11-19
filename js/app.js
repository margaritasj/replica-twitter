/* jshint browser: true */
window.addEventListener('load', function(event) {
var divText = document.getElementById('set-text');
var btnTweet = document.getElementById('submit');
var divTweet = document.getElementById('text-tweet');
/*V 0.0.1 - evento click, obtener el texto y agregar el texto al HTML.*/  
btnTweet.addEventListener('click', function(event) {
  var cloneText = divText.cloneNode(true);
  cloneText.removeAttribute('placeholder');
  cloneText.removeAttribute('contenteditable');
  cloneText.classList.remove('editable');
  var tweet = divTweet.appendChild(cloneText);
  divTweet.insertBefore(tweet,divTweet.childNodes[1]).classList.add('my-tweets');
});
});