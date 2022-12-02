function convertir(){
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 315
    var euro = 338
    if(document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("El cambio de Pesos Argentinos a Dolares es: $" + resultado.toFixed(2));
    }
    else if(document.getElementById("dos").checked){
        resultado = valore / euro;
        alert("El cambio de Pesos Argentinos a Euro es: $" + resultado.toFixed(2));
    }
    else{
        alert("tienes que completar todos los requerimientos")
    }
}