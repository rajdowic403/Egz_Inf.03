const oblicz = () =>{

    let gosc = parseInt(document.forms['form']['ilosc'].value);

    let poprawiny = document.forms['form']['popraw'].checked;

    if(poprawiny == true){
        
        document.write("Koszt wynosi: " + (100 * gosc)*1.3 );
        
    }
    else{
        document.write("Koszt wynosi: " + 100 * gosc);
        
    }
    



}