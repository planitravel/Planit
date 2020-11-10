<<<<<<< HEAD
=======
<<<<<<< HEAD
const prallax = document.getElementById("parallax");
window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    console.log("offset: " + offset);
});
=======
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
>>>>>>> a86da621244c970389f2f3f87cd5edeab86a8d35
>>>>>>> 8a9b438e22a58ef0caa7667520c2389e28810554
