document.getElementById("paycheck").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        calculateAnnualSalary();
    }
});

function calculateAnnualSalary() {
    var weeklyPaycheck = parseFloat(document.getElementById("paycheck").value);
    var annualSalary = weeklyPaycheck * 52;
    document.getElementById("annualSalary").innerHTML = "Your annual salary is $" + annualSalary;
}

document.getElementById("calculateBtn").addEventListener("click", function() {
    const calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.classList.add("spin");
    
    setTimeout(() => {
      calculateBtn.classList.remove("spin");
    }, 500);
    
    const weeklySalary = parseInt(document.getElementById("weeklySalary").value);
    const annualSalary = weeklySalary * 52;
    
    const salaryEl = document.getElementById("annualSalary");
    salaryEl.innerHTML = `Your estimated annual salary is $${annualSalary}.`;
  });
  
  