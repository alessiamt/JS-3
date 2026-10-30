function calcola(){

    let valore;
    let valoreUS;
    let valoreUK;
    let valoreJP;

    valore=document.getElementById("inserimento").value;
    valore=parseFloat(valore)

    if(valore > 0 && !isNaN(valore)){

        valoreUS = valore*1.16;
        document.getElementById("america").innerHTML= "$" + valoreUS.toFixed(2);

        valoreUK = valore*0.87;
        document.getElementById("regno").innerHTML= "£" + valoreUK.toFixed(2);

        valoreJP = valore*178.16;
        document.getElementById("giappone").innerHTML= "¥" + valoreJP.toFixed(2);
    }

}

function scuro(){

    var toggle = document.getElementById("switchCheckDefault");
    var elem = document.body;

    if(toggle.checked){

        elem.classList.add("bg-black", "text-white");
    } else {
        elem.classList.remove("bg-black", "text-white");
    }
}