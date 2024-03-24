
//declare variables for tax rates and deductions
function netPay(basicSalary, allowances) {
    const taxRate = 0.3;
    const nhifRate = 0.01;
    const nssfRate = 0.01;
    
//formular for calculating gross salary
let grossSalary = basicSalary + allowances; 

//to get deductions
const nssfDeduction = Math.min(grossSalary * nssfRate);
const nhifDeduction = Math.min(grossSalary * nhifRate);
const paye = Math.max(grossSalary - nhifDeduction - nssfDeduction) * taxRate


//calculating the net salar
const netSalary = grossSalary - nhifDeduction - nssfDeduction - paye; 

  //print to check the output
console.log(`NHIF deduction is: ${nhifDeduction}`);
console.log(`NSSF deduction: ${nssfDeduction}`);
console.log(`PAYE: ${paye}`);
console.log(`The gross salary is: ${grossSalary}`);
console.log(`The net pay: ${netSalary}`); 

}
netPay(52000, 10000)