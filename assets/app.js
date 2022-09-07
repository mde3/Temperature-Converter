//Get elements from DOM
const inputs = document.querySelectorAll(".panel input");
const c = document.querySelector("#celsius");
const f = document.querySelector("#fahrenheit");
const k = document.querySelector("#kelvin");

//Loop through all inputs
inputs.forEach(input => {
    
    //Add an input event on all inputs
    input.addEventListener("input", e => {
        
        //Gets the id from the input the event takes place on
        const unit = e.target.id;
        //Gets the value from the input the event takes place on
        const v = parseInt(e.target.value);
        
        //If the input event takes place in the Celsius input
        if(unit === "celsius"){
            //Convert the value to Fahrenheit
            f.value = parseFloat((v * 1.8) + 32).toFixed(4) * 1;
            //Convert the value to Kelvin
            k.value = parseFloat((v * 273.15) + 32).toFixed(4) * 1;
        }
        
        //If the input event takes place in the Celsius input
        else if(unit === "fahrenheit"){
            //Convert the value to Celsius
            c.value = parseFloat((v - 32) * 5 / 9).toFixed(4) * 1;
            //Convert the value to Kelvin
            k.value = parseFloat(((v - 32) * 5 / 9) + 273.15).toFixed(4) * 1;
        }
        
        //If the input event takes place in the Kelvin input
        else if(unit === "kelvin"){
            //Convert the value to Celsius
            c.value = parseFloat(v - 273.15).toFixed(4) * 1;
            //Convert the value to Fahrenheit
            f.value = parseFloat((v - 273.15) * 9 / 5 + 32).toFixed(4) * 1;
        }
    });
});