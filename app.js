//Calculate Tip

function calculateTip() {
  
    var billAmt = document.getElementById("billAmt").value;
  
    var servicequality = document.getElementById("servicequality").value;
  
    var tipTotal = document.getElementById("tipTotal").value;
  
    var billTotal = document.getElementById("billTotal").value;
  
    //Tip Calculation
  
    var total = billAmt * servicequality;
  
    var Total = parseFloat(billAmt) + parseFloat(total);
  
    //Display  Tip
  
    document.getElementById("tipTotal").innerHTML = total;
  
    //Display Total
  
    document.getElementById("billTotal").innerHTML = Total;
  }
  
  //Click function
  
  document.getElementById("calculate").onclick = function () {
    calculateTip();
  };