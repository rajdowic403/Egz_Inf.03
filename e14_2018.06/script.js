document.open
const oblicz = () =>{

    let gosc = parseInt(document.forms['form']['ilosc'].value);

    let poprawiny = document.forms['form']['popraw'].checked;
if(gosc > 0){
    if(poprawiny == true){
        let zpopra = "Koszt wynosi: " + (100 * gosc)*1.3;
        document.getElementById("dol").innerHTML = zpopra;
        
    }
    else{
        let bez = "Koszt wynosi: " + 100 * gosc;
        document.getElementById("dol").innerHTML = bez;
        
    }
    
}
else{
    document.getElementById("dol").innerHTML = "podaj poprawną liczbę gości!";
}


}