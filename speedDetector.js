// speed limit
const speedMax = 70;

// get user speed 
const speed = parseFloat(prompt("Enter the car's speed (in km/s):")); 

if (speed <= speedMax) {
   alert("Ok"); // an alert indicating that the speed is ok
}
 else {
  const excessSpeed = speed - speedMax;
  const Points = Math.floor(excessSpeed / 5);

  if (Points > 12) {
    alert("License suspended"); // an alert indicating that the license is suspended
  } else if (speed === 80) {
    alert(`Points: ${Points}`); // an alert indicating showing the points
  }
}
