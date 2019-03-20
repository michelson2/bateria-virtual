// Criação da variável que comporta a classe dos botões
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Criação do loop que percorre os botões
for (var i = 0; i<numberOfDrumButtons; i++) {

  // Função que captura o "click" do mouse e retorna o botão clicado
  document.querySelectorAll("button")[i].addEventListener("click", function () {

    // Criação da variável que recebe o "valor" do click do mouse
    var buttonInnerHTML = this.innerHTML;

    // Realiza a ação sonora de acordo com o "valor" do click que a variável recebeu
      makeSound(buttonInnerHTML);

      // Realiza uma animação de "botão pressionado"
      buttonAnimation(buttonInnerHTML);

  });

}
// Função que captura a "tecla" pressionada
document.addEventListener("keypress", function(event){

  // Realiza a ação sonora de acordo com o "valor" capturado pela função keypress + event
  makeSound(event.key);

  // Realiza uma animação de "botão pressionado"
  buttonAnimation(event.key);

});

// Criação da função makesound
function makeSound(key) {

        // Loop de comparação. "key" guarda o valor da tecla pressionada e será comparado com as classes dos botões (w,a,s,d,j,k,l)
        switch (key) {

          case "w":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;

            case "a":
              var tom2 = new Audio("tom-2.mp3");
              tom2.play();
              break;

            case "s":
              var tom3 = new Audio("tom-3.mp3");
              tom3.play();
              break;

            case "d":
              var tom4 = new Audio("tom-4.mp3");
              tom4.play();
              break;

            case "j":
              var snare = new Audio("snare.mp3");
              snare.play();
              break;

            case "k":
              var crash = new Audio("crash.mp3");
              crash.play();
              break;

            case "l":
              var kick = new Audio("kick-bass.mp3");
              kick.play();
              break;

          // Retorna pro navegador o valor que a variável buttonInnerHTML receberá
          default: console.log(buttonInnerHTML);
}
}
// Criação da função buttonAnimation
function buttonAnimation(currentkey) {

  var activeButton =  document.querySelector("."+currentkey)

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}
