// my grade genertaor code

// prompt the user to enter their marks

function grading() {
    let userInput = prompt("please enter your marks !");
    let Input = parseInt(userInput);
    if (isNaN(Input) || Input < 0 || Input > 100) {
      alert("please enter valid marks between 0-100");
    } else {
      alert("Valid marks click OK to see results ");
    }


  if (Input > 79) {
    alert("A");
  } else if (Input >= 60 && Input <= 79) {
    alert("B");
  } else if (Input >= 50 && Input <= 59) {
    alert("C");
  } else if (Input >= 40 && Input <= 49) {
    alert("D");
  }
   else {
    alert("E");
  }
}
grading();
