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