let input = document.querySelector('input');

function Click(gelenData){
    input.value += gelenData;
}

function Hesabla(){
    input.value = eval(input.value);
}

function Sifirla(){
    input.value = "";
}

function Sil(){
    input.value = input.value.substr(0,input.value.length - 1)
}