function toggleMenu() {
  var x = document.querySelector(".nav-links");
  if (x.className === "nav-links") {
    x.className += " responsive";
  } else {
    x.className = "nav-links";
  }
}
