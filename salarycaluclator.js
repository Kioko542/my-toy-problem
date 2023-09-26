// PAYE (Income Tax)
function calculatePAYE(annualTaxableIncome) {
    let paye = 0;
  
    if (annualTaxableIncome <= 288000) {
      paye = annualTaxableIncome * 0.10;
    } else if (annualTaxableIncome <= 388000) {
      paye = 288000 * 0.10 + (annualTaxableIncome - 288000) * 0.25;
    } else if (annualTaxableIncome <= 6000000) {
      paye =
        288000 * 0.10 +
        (388000 - 288000) * 0.25 +
        (annualTaxableIncome - 388000) * 0.30;
    } else if (annualTaxableIncome <= 9600000) {
      paye =
        288000 * 0.10 +
        (388000 - 288000) * 0.25 +
        (6000000 - 388000) * 0.30 +
        (annualTaxableIncome - 6000000) * 0.325;
    } else {
      paye =
        288000 * 0.10 +
        (388000 - 288000) * 0.25 +
        (6000000 - 388000) * 0.30 +
        (9600000 - 6000000) * 0.325 +
        (annualTaxableIncome - 9600000) * 0.35;
    }
  
    return paye;
  }
  
  //  NHIF Deductions
  function calculateNHIF(grossSalary) {
    let Deduction = 0;
  
    if (grossSalary <= 5999) {
      Deduction = 150;
    } else if (grossSalary <= 7999) {
      Deduction = 300;
    } else if (grossSalary <= 11999) {
      Deduction = 400;
    } else if (grossSalary <= 14999) {
      Deduction = 500;
    } else if (grossSalary <= 19999) {
      Deduction = 600;
    } else if (grossSalary <= 24999) {
      Deduction = 750;
    } else if (grossSalary <= 29999) {
      Deduction = 850;
    } else if (grossSalary <= 34999) {
      Deduction = 900;
    } else if (grossSalary <= 39999) {
      Deduction = 950;
    } else if (grossSalary <= 44999) {
      Deduction = 1000;
    } else if (grossSalary <= 49999) {
      Deduction = 1100;
    } else if (grossSalary <= 59999) {
    Deduction = 1200;
    } else if (grossSalary <= 69999) {
      Deduction = 1300;
    } else if (grossSalary <= 79999) {
      Deduction = 1400;
    } else if (grossSalary <= 89999) {
      Deduction = 1500;
    } else if (grossSalary <= 99999) {
      Deduction = 1600;
    } else {
      Deduction = 1700;
    }
  
    return Deduction;
  }
  
  //  NSSF Deductions
  function calculateNSSF(grossSalary) {
    const Percentage = 0.05;
    const nssfDeduction = grossSalary * Percentage;
    return nssfDeduction;
  }
  
  //  calculate Net Salary
  function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const annualSalary = grossSalary * 12; // Assuming monthly salary, convert to annual
  
    const paye = calculatePAYE(annualSalary);
    const nhifDeductions = calculateNHIF(grossSalary);
    const nssfDeductions = calculateNSSF(grossSalary);
    const netSalary = grossSalary - paye - nhifDeductions - nssfDeductions;
  
    return {
      grossSalary,
      paye,
      nhifDeductions,
      nssfDeductions,
      netSalary,
    };
  }
  
  // Prompt the user for input
  const basicSalary = parseFloat(prompt("please enter your Basic Salary(Ksh):"));
  const benefits = parseFloat(prompt("please enter your Benefits (Ksh):"));
  
  // Check if inputs are valid numbers
  if (isNaN(basicSalary) || isNaN(benefits)) {
    console.log("Invalid input. Please enter valid numbers.");
  } else {
    const salaryDetails = calculateNetSalary(basicSalary, benefits);
    const netSalary = salaryDetails.netSalary;

    alert("Net Salary: Ksh " + netSalary)
  }
  