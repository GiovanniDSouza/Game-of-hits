const submitBtnn = document.querySelector('.btn');
const submitBtn = document.querySelector('.submit');
const chatArea = document.querySelector('.game');
const angle = document.getElementById('angle');
// Clik do botão enter
document.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
     
        submitBtnn.click();
      
    }
})

// Criando os novos jogadores
submitBtn.addEventListener('click', ()=>{
    
 document.getElementById("pla").style.display = "none";
 document.getElementById("play").style.display = "none";
 document.getElementById("add").style.visibility = "hidden";
    let temp = ` <div class="controle" id="remo">
   
    <div class="tabela">
        <p>PLayer 3</p>
        <input type="text" name="" id="playerthree" class="in" placeholder="Name of player">
        <input type="password" name="" id="three"  class="in" placeholder="Number">
        <p>PLayer 4</p>
        <input type="text" name="" id="playerfour"  class="in" placeholder="Name of player">
        <input type="password" name="" id="four"  class="in" placeholder="Number">
    </div>
   <button onclick="myFunction();" id="pla" class="play" value="enviar" >Play</button>
                <button  id="play" style="display: none;" class="play"  value="enviar">Play</button>
                <div id="remove">
                <p>Remove new players</p>
                    <input type="radio" name="" class="submit" id="box" onclick="remove();">
                </div>
</div>`;
    
    chatArea.insertAdjacentHTML("beforeend", temp);
})

angle.addEventListener('click', ()=>{
    
    document.getElementById("game").style.display = "none";
    document.getElementById("fa").style.visibility = "visible";
      
   })