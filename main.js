const botao = document.querySelector('.menu__button');
botao.addEventListener('click', funcaoCallback);

function funcaoCallback() {
    const menuNav = document.querySelector('.menu__nav')
    menuNav.classList.toggle('nav-active')
  
    button.textContent === "Abrir"
      ? button.textContent = "Fechar"
      : button.textContent = "Abrir"
  }


  
 let key = '0816ba701b3b909f3f2f281e553eb99d'
 let pais = 'br'
 let url = `https://gnews.io/api/v4/top-headlines?category=country=br&apikey=${key}`
 let mostrar_noticias = document.getElementById('ultimas');
 fetch(url).then((resposta)=> resposta.json()).then(dato =>{
   console.log(dato);
   let noticias = (dato.articles);
   noticias.map(function(numero){
    let div=document.createElement();
   })
 });