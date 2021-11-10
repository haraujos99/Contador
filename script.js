function contar(){

var inicio = document.getElementById('txtinicio');
var fim = document.getElementById('txtfim');
var passo = document.getElementById('txtpasso');
var num = Number(inicio.value);
var conta = '';
var res = document.getElementById('res');
var p = Number(passo.value);

if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    res.innerHTML = 'Impossível contar!';
}
else{

if (p === 0){
    window.alert('Passo inválido. Considerando passo = 1.');
    p = 1;
}
if(num < Number(fim.value)){
//Contagem progressiva 
while (num <= Number(fim.value)){
    conta += `${num}  👉 `

    num += p;
}
} else{
    //Contagem progressiva 
while (num >= Number(fim.value)){
    conta += `${num}  👉 `

    num -= p;
}
}

res.innerHTML = `${conta} 🏁` 
}
}



