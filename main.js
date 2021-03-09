function oblicz(){
    var waga= document.getElementById("waga").value;
    waga = parseInt(waga);
    var wzrost= document.getElementById("wzrost").value;
    wzrost = parseInt(wzrost)/100;
    var bmi = waga / (wzrost * wzrost);
    document.getElementById("wynik").innerHTML = bmi.toFixed(2);

    if (bmi<16){
        document.getElementById("slownie").innerHTML = "wygłodzenie";
    }
    else if( (bmi>=16)&& (bmi<17) ){
        document.getElementById("slownie").innerHTML = "wychudzenie";
    }
    else if ( (bmi>=17)&& (bmi<18.5 )){
        document.getElementById("slownie").innerHTML = "niedowaga";
    }
    else if ((bmi>=18.5)&& (bmi<24)){
        document.getElementById("slownie").innerHTML = "waga prawidłowa";
    }
    else if ((bmi>=25)&& (bmi<29.9)){
        document.getElementById("slownie").innerHTML = "nadwaga";
    }
    else if ((bmi>=30)&& (bmi<34.9)){
        document.getElementById("slownie").innerHTML = "otyłość I stopnia";
    }        
    else if ((bmi>=35)&& (bmi<39.9)){
        document.getElementById("slownie").innerHTML = "otyłość II stopnia";
    }
    else if (bmi>=40){
        document.getElementById("slownie").innerHTML = "otyłość III stopnia";
    }  
}          