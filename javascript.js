function nextpage() {
    var username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    window.location.href = "greetingspage.html";
  }
  
  function display() {
    var username = localStorage.getItem("username");
    document.getElementById("username").innerHTML = username;
  }
  
  window.onload = function() {
    display();
  }
  