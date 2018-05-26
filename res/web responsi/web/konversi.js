function konversiKurs()
{
    {
        var nilai;
        kursType=document.kurs.radio;

    if(kursType=='idr'){
           hasil=13500*nilai;
    }
    
    else{
           hasil=nilai/13500;
    }
    
    document.getElementById(resultfield).value=hasil;

}
