function criptografar() {
    var entrada = document.getElementById("caixa_de_texto_entrada").value;
    var saida = document.getElementById("caixa_de_texto_saida");

    var stringSub = entrada.split('').map(function (caractere) {
        if (caractere == "a")
            return "ai";
        else if (caractere == "e")
            return "enter";
        else if (caractere == "i")
            return "imes";
        else if (caractere == "o")
            return "ober";
        else if (caractere == "u")
            return "ufar";
        else
            return caractere;
    }).join('');

    saida.value = stringSub;
}

function descriptografar() {

    var entrada = document.getElementById("caixa_de_texto_saida").value;
    var saida = document.getElementById("caixa_de_texto_entrada");
    var stringCompleta = entrada;

        stringCompleta = stringCompleta.replace(new RegExp("ai", 'g'), 'a');
        stringCompleta = stringCompleta.replace(new RegExp("enter", 'g'), 'e');
        stringCompleta = stringCompleta.replace(new RegExp("imes", 'g'), 'i');
        stringCompleta = stringCompleta.replace(new RegExp("ober", 'g'), 'o');
        stringCompleta = stringCompleta.replace(new RegExp("ufar", 'g'), 'u');


    saida.value = stringCompleta;


}
