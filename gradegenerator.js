// my grade genertaor code

// prompt the user to enter their marks

function grading() {
    let userInput = prompt("please enter your marks !");
    let Input = parseInt(userInput);
    if (isNaN(Input) || Input < 0 || Input > 100) {
      alert(" INVALID:please enter valid marks between 0-100"); // an alert indicating that the marks are in-valid
    } else {
      alert("Valid marks click OK to see results "); // an alert indicating that the marks are valid
    }


  if (Input > 79) {
    alert("A"); //alert grade "A" displayed
  } else if (Input >= 60 && Input <= 79) {
    alert("B");//alert grade "B" displayed
  } else if (Input >= 50 && Input <= 59) {
    alert("C");//alert grade "C" displayed
  } else if (Input >= 40 && Input <= 49) {
    alert("D");//alert grade "D" displayed
  }
   else {
    alert("E");//alert grade "E" displayed
  }
}
grading();
