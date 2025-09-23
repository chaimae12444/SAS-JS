let note;
let somm = 0;
let counter = 0;
do {
    note = +prompt("enter a grade")

    if(note >=0 && note <=20){
        somm += note;
        counter++;
 }else if (note == -1) break;
 else{
    alert("note unvalide")
 }
 }while(true);
 alert(`la moyen est ${somm/counter}`);
