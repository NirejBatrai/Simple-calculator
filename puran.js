// let display = document.getElementById("display");
// //acces all the button
// let buttons = Array.from(document.getElementsByClassName("button"));

// buttons.map((button) => {
//   button.addEventListener("click", (e) => {
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.innerHTML);
//   });
// });

//to display the number to you//
function appendToOutput(value) {
  const display = document.getElementById("display");
  display.value += value;
}

// to clear everthing u type in calculator
function clearOutput() {
  const display = document.getElementById("display");
  display.value = "";
}

//all calculate
function calculateResult() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Fuck off";
  }
}
