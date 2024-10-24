const calcButton = document.getElementById("calculate-button");
const p1TotalDisplay = document.getElementById("total-display");
// test**This works
const demo = document.getElementById("demo1");

// This is not working

function test1(){
    p1TotalDisplay.textContent = "Hello World";
}
// This works
    calcButton.addEventListener("click", function(){
        demo.innerHTML = "Hello World";
    });

    
