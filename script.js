function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    //  if(html.classList.contains('light')) {
    //     html.classList.remove('light')
    //  } else{
    //     html.classList.add('light')
    //  }
 
    // pegar a tag img
    const img = document.querySelector("#profile img")
    // substituir a imagem
    if(html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
        img.setAttribute('src', 'https://media.istockphoto.com/id/532378051/pt/foto/c%C3%A9u-de-noite-com-estrelas-e-nuvens.jpg?s=1024x1024&w=is&k=20&c=7uPrU3gBCjpoYlSgRAaPGYG-lts3AZL7ZNWbS-8Nrmw=')
    } else{
    // se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/avatar.png')
    }
}