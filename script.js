let inputTotal = document.getElementById("input-Total")
let inputWitholding = document.getElementById("input-Witholding")
let calcBut = document.getElementById("calc")
let total = document.getElementById("total")
let afterTax = document.getElementById("after-Tax")
let tax = document.getElementById("tax")
//to format the output as a $ amount
let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
//To round so the tax and after tax is not more than the input amount
function financial(i) {
    return Number.parseFloat(i).toFixed(2);
  }
  

calcBut.addEventListener("click",function(){
    let differance = inputWitholding.value / 100
    
    total.innerText = "Total: " + USDollar.format(inputTotal.value)

    afterTax.innerText = "After Tax: " + USDollar.format(inputTotal.value - (financial((inputTotal.value)*differance)))
   
    tax.innerText = "Tax: " + USDollar.format(inputTotal.value * differance)
    
    // To clear the input
    inputTotal.value = ""
    inputWitholding.value = ""
    console.log

})






//Make a click to copy

