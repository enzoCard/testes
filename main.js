const botao = document.querySelector('.menu__button');
botao.addEventListener('click', funcaoCallback);

function funcaoCallback() {
    const menuNav = document.querySelector('.menu__nav')
    menuNav.classList.toggle('nav-active')
  
    button.textContent === "Abrir"
      ? button.textContent = "Fechar"
      : button.textContent = "Abrir"
  }


  
  const botaoPesq = document.querySelector(".botao_pesq");
  botaoPesq.addEventListener("click", () => {
    const inputPesq = document.querySelector(".digite_pesq");
    const pesqValue = inputPesq.value;
    let key = "0816ba701b3b909f3f2f281e553eb99d";
    let pais = "br";
    let url = `https://gnews.io/api/v4/top-headlines?q=${pesqValue}&country=br&apikey=${key}`;
    console.log(`Resultado da pesquisa "${pesqValue}":`);
    fetch(url)
      .then((resposta) => resposta.json())
      .then((data) => {
        console.log(data);
      });
  });

  