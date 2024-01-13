var output = document.getElementById("output");


function AC(){
    output.value ="";
}
function DE(){
    output.value = output.value.slice(0,-1);
}
function input(value){
    output.value += value;
}


function equal(){
    output.value = eval(output.value);
}

 