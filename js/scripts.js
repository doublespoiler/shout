
window.onload = function() {
  console.log("Script executing!");

  let currentSize = 10;  //default font size
  
  let form = document.querySelector('form');
  form.onsubmit = function(event) {
    console.log("Submit form successfully reached.");

    event.preventDefault();

    const personInput = document.getElementById("personInput").value;
    document.querySelector('span#personInput').innerText = personInput.toUpperCase();

    currentSize += 5; //increments font size by 5
    let currentSizePx = currentSize.toString() + "px"; //turns font size into string with PX at the end for CSS

    document.querySelector('span#personInput').style.fontSize = currentSizePx; //set font size in inline CSS to currentSizePx

    document.querySelector("div#shout").removeAttribute("class");

    console.log(currentSize);
    return currentSize;
  };
};