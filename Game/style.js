// Parte do login e removenod a tela do login e aparecendo o jogo
function login(){
    var login = document.getElementById("email").value;
    var senha = document.getElementById("password").value;

    if (login == "test" && senha == "1234"){
        console.log("Bem-vindo");
        document.getElementById("login").style.display = "none";
        document.getElementById("game").style.display = "block";
    } else{ 
        document.getElementById("msgErro").style.display = "block";
        document.getElementById("email").style.border = "2px solid red";
        document.getElementById("email").style.backgroundColor = "lightgray";
        document.getElementById("password").style.backgroundColor = "lightgray";
        document.getElementById("password").style.border = "2px solid red";
    }
}

// Essa parte é o botão Ok da msgErro
function msgErroOk(){
    document.getElementById("msgErro").style.display = "none";
    document.getElementById("email").style.border = "none";
    document.getElementById("email").style.backgroundColor = "white";
    document.getElementById("password").style.backgroundColor = "white";
    document.getElementById("password").style.border = "none";
}

// Aqui começou o jogo com só dois jogadores
function myFunctionn() {
    var playerOne = document.getElementById("playerOne").value;
    var playerTwo = document.getElementById("playerTwo").value;
      
     var n1 = document.getElementById("one").value;
     var n2 = document.getElementById("two").value;
     
     n1 = parseInt(n1);
     n2 = parseInt(n2); 

     
     if(n1 === n2 ){
         document.getElementById("empate").style.display = 'block';
         document.getElementById("dem").innerHTML = 
         "You are game is tiedm " + playerOne + " and " + playerTwo ;
         
     } else{
         var nSorteado = parseInt(Math.random() * 2);
         document.getElementById("sorteado").style.display = 'block';
         document.getElementById("sNamber").innerHTML = 
         "The number that was drawn is: " + nSorteado;
        
         if(nSorteado === 0 && n1 < n2 || nSorteado === 1 && n1 > n2 ) {
            document.getElementById("yes").style.display = 'block';
            document.getElementById("not").style.display = 'none';
            document.getElementById("demoo").innerHTML = 
            "Congratulations " + playerOne + " for your victory" + " and your chosen number was: " + n1 ; 
         } else {
            document.getElementById("not").style.display = 'block';
        document.getElementById("yes").style.display = 'none';
        document.getElementById("demo").innerHTML =
        "Congratulations " + playerTwo + " for your victory" + " and your chosen number was: " + n2;
         }
     }
 
 }

 // Aqui é o começo do jogo com mais de dois jogadores 
function myFunction() {
   var playerOne = document.getElementById("playerOne").value;
   var playerTwo = document.getElementById("playerTwo").value;
   var playerthree = document.getElementById("playerthree").value;
   var playerfour = document.getElementById("playerfour").value;
     
    var n1 = document.getElementById("one").value;
    var n2 = document.getElementById("two").value;
    var n3 = document.getElementById("three").value;
    var n4 = document.getElementById("four").value;
    
    n1 = parseInt(n1);
    n2 = parseInt(n2); 
    n3 = parseInt(n3);
    n4 = parseInt(n4); 
    
    if(n1 === n2 && n3 === n4){
        document.getElementById("empate").style.display = 'block';
        document.getElementById("dem").innerHTML = 
        "You are game is tiedm " + playerOne + " and " + playerTwo + " and " + playerthree + " and " + playerfour;
        
    } else{
        var nSorteado = parseInt(Math.random() * 2);
        document.getElementById("sorteado").style.display = 'block';
        document.getElementById("sNamber").innerHTML = 
        "The number that was drawn is: " + nSorteado;
       
        if(nSorteado === 0 && n1 < n2 && n3 < n4 || nSorteado === 1 && n1 > n2 && n3 > n4 ) {
           document.getElementById("yes").style.display = 'block';
           document.getElementById("not").style.display = 'none';
           document.getElementById("demoo").innerHTML = 
           "Congratulations " + playerOne + " and " + playerthree + " for your victory" + " and your chosen number was: " + n1 , n3; 
        } else {
           document.getElementById("not").style.display = 'block';
       document.getElementById("yes").style.display = 'none';
       document.getElementById("demo").innerHTML =
       "Congratulations " + playerTwo + " and " + playerfour +  " for your victory" + " and your chosen number was: " + n2, n4;
        }
    }

}
// Função de limpa os jogadores embaixo é outro modo de fazer
function clean()
{
    document.getElementById("add").style.display = 'block';
    document.getElementById("pla").style.display = 'block';
    
    document.getElementById('remo').innerHTML = "";
}
// Função para remover os outros jogadores
function remove(){
    document.getElementById("remo").style.display = 'none';
    document.getElementById("add").style.display = 'block';
    document.getElementById("pla").style.display = 'block';
    
}