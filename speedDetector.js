const speedMax = 70;
const speed = parseFloat(prompt("Enter the car's speed (in km/s):")); 

if (speed <= speedMax) {
  alert("Ok");
}
 else {
  const excessSpeed = speed - speedMax;
  const Points = Math.floor(excessSpeed / 5);

  if (Points > 12) {
    alert("License suspended");
  } else if (speed === 80) {
    alert(`Points: ${Points}`);
  }
}
