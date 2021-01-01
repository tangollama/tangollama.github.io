function colorMe() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
function adventureTime() {
  var img = document.querySelector("#logoImg");
  if (img.getAttribute("onclick") == null) {
    setSong(img);
    var bfast = document.querySelectorAll(".mealContainer > *");
    for (var i = 0; i < bfast.length; i++) {
      setSong(bfast[i]);
    }
    setSong(document.querySelector("footer strong"));
    alert("WE are now ready to make some bacon pancakes!!!");
  }
  var myColor = colorMe();
  document.querySelector("header").style.backgroundColor = myColor;
  document.querySelector("footer").style.backgroundColor = myColor;
  document.querySelector("header button").style.backgroundColor = colorMe();
}
function setSong(el) {
  el.style.cursor = "pointer";
  el.setAttribute("onclick", "baconPancakesSong()");
}
function baconPancakesSong() {
  window.open("https://www.youtube.com/watch?v=r57zosAFNw8");
}
