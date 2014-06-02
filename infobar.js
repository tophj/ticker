





// Obtain the count of sandwiches from the page URL.
var matches = window.location.hash.substring(1);

if (matches) {
  // Replace the placeholder text with the actual count.
  var domcount = document.querySelector('#matches');
  domcount.innerText = count;
  domcount.innerText.color = white;
}