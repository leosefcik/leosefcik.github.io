var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topbar").style.top = "0";
  } else {
    document.getElementById("topbar").style.top = "-4.1rem";
  }
  prevScrollpos = currentScrollPos;
} 