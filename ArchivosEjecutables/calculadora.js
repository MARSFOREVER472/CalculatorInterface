// CALCULATOR PROGRAM...

const display = document.getElementById("display");

// PRIMERA FUNCIÓN A EJECUTAR...

function appendToDisplay(input)
{
    display.value += input;
}

// SEGUNDA FUNCIÓN A EJECUTAR...

function clearDisplay()
{
    display.value = "";
}

// TERCERA Y ÚLTIMA FUNCIÓN A EJECUTAR...

function calculate()
{
    display.value = eval(display.value);
}