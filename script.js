const menu = document.getElementsByClassName('item');

function deleta() {
  for (let j = 0; j < menu.length; j += 1) {
    const x = menu[j];
    x.classList.remove('active');
  }
}

function selecionaMenu() {
  for (let i = 0; i < menu.length; i += 1) {
    const corEscolhida = menu[i];
    corEscolhida.addEventListener('click', function () {
      if (this.className !== 'item active') {
        deleta();
        corEscolhida.classList.add('active');
      }
    });
  }
}
selecionaMenu();

//linha preta onde mostra qual parte do menu estou selecionando


window.addEventListener('scroll', reveal);
function reveal() {
  var reveals = document.querySelectorAll('.reveal')
  for (let i = 0; i < reveals.length; i += 1) {
    var windowheight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if(revealTop < windowheight - revealPoint){
      reveals[i].classList.add('active');
    }
    else {
      reveals[i].classList.remove('active');
    }

  }
}
// função para animar o 'sobre mim/projetos/curriculo'