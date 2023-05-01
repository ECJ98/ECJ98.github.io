function bigger() {
    document.getElementById("textarea").style.fontSize = "24pt";
  }
  
  function fancy() {
    let userText = document.getElementById("textarea");
    document.getElementById("boringText").checked = false;
    userText.style.fontWeight = "bold";
    userText.style.textDecoration = "underline";
    userText.style.color = "blue";
  }
  
  function boringBetty() {
    let userText = document.getElementById("textarea");
    document.getElementById("fancytext").checked = false;
    userText.style.fontWeight = "normal";
    userText.style.textDecoration = "none";
    userText.style.color = "black";
  }
  
  function moo() {
    let userText = document.getElementById("textarea");
    userText.style.textTransform = "uppercase";
    let split = userText.value.split(".");
    userText.value = split.join("-Moo");
  }
