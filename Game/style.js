function myFunction() {
    let personn = prompt("Please enter your name player 1", "");
    let person = prompt("Please enter your name player 2");
     
    var n1 = prompt("Enter a number");
    n1 = parseInt(n1);

    var n2 = prompt("Enter a number");
    n2 = parseInt(n2); 
    if(n1 === n2){
        document.getElementById("empate").style.display = 'block';
        document.getElementById("dem").innerHTML = 
        "You are game is tiedm " + personn + " and " + person ;
        
    } else{
        var nSorteado = parseInt(Math.random() * 2);
        document.getElementById("sorteado").style.display = 'block';
        document.getElementById("sNamber").innerHTML = 
        "The number that was drawn is: " + nSorteado;
       
        if(nSorteado === 0 && n1 < n2 || nSorteado === 1 && n1 > n2) {
           document.getElementById("yes").style.display = 'block';
           document.getElementById("not").style.display = 'none';
           document.getElementById("demoo").innerHTML = 
           "Congratulations " + personn +  " for your victory" + " and your chosen number was: " + n1; ;
        } else {
           document.getElementById("not").style.display = 'block';
       document.getElementById("yes").style.display = 'none';
       document.getElementById("demo").innerHTML =
       "Congratulations " + person +  " for your victory" + " and your chosen number was: " + n2;
        }
    }




}