window.addEventListener("load", function() { //creates event listener on page load
  let form = document.querySelector("form");

  //button and story at top level so we can access them from different locations
  let resetBtn = document.querySelector("button#reset");
  let story = document.querySelector("div#story");
  form.addEventListener("submit", function(event) {
    // in this section we get the value for each form input
    const person1Input = document.getElementById("person1Input").value;
    const person2Input = document.getElementById("person2Input").value;
    const animalInput= document.getElementById("animalInput").value;
    const exclamationInput = document.getElementById("exclamationInput").value;
    const verbInput = document.getElementById("verbInput").value;
    const nounInput = document.getElementById("nounInput").value;

    // then we set the story variables to the values we got from the form
    document.querySelector("span#person1a").innerText = person1Input;
    document.querySelector("span#person1b").innerText = person1Input;
    document.querySelector("span#person1c").innerText = person1Input;
    document.querySelector("span#person2a").innerText = person2Input;
    document.querySelector("span#person2b").innerText = person2Input;
    document.querySelector("span#animal").innerText = animalInput;
    document.querySelector("span#verb").innerText = verbInput;
    document.querySelector("span#noun").innerText = nounInput;
    document.querySelector("span#exclamation").innerText = exclamationInput;

    //show story and event button
    story.removeAttribute("class"); //use story variable instead of querySelector
    resetBtn.removeAttribute("class");
    
    event.preventDefault(); //only have to call once even though we have many listeners for the submit event
  });

  //event listener to show ad on form submit
  form.addEventListener ("submit", function() {
    window.alert("Do you need a new computer? Visit www.superextracomputersales.com to find the best deals!");
  });

  //event listener for the reset button
  resetBtn.addEventListener("click", function() {
    story.setAttribute("class", "hidden");
    resetBtn.setAttribute("class", "hidden");
    document.getElementById("person1Input").value = null;
    document.getElementById("person2Input").value = null;
    document.getElementById("animalInput").value = null;
    document.getElementById("exclamationInput").value = null;
    document.getElementById("verbInput").value = null;
    document.getElementById("nounInput").value = null;
  });
});