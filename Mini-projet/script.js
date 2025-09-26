let compétences = [
    "Maquetter une application",
    "Réaliser une interface utilisateur web statique et adaptable",
    "Développer une interface utilisateur web dynamique",
    "Créer une base de données - niveau 1",
    "Développer les composants d’accès aux données - niveau 1",
    "Développer la partie back-end d’une application web ou web mobile - niveau 1",
    "Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce",
    "Framwork FrontEnd (React, vueJs...)",
    "Comprendre la démarche pédagogique à Solicode",
    "Collaboration & posture professionnelle"
 ];
 let score = 0;
 let result = 10;
 let i = 1;
 alert("tapez le code correspondant à la compétence (c1..c10)");
 alert("vous avez" + result+ "questions");
 while(i<= result){
    let index = Math.floor( Math.random() * compétences.length);
    let correctCode = "C" +(index + 1);
    let answer = prompt( +i+ ":Quelle est le code pour:" + compétences[index]);
    if(!answer)
    { alert("Good bey");
        break;
    }
    if(answer==correctCode)
    {
        alert("correct");
        score++;
    }
    else{
        alert("Faux, la bonne reponse est:"+ correctCode);
    }
    i++;
 }
 alert("le jeu est terminé!");
 alert("votre score"+score+"/"+result);
