const run = async () => {
    let response = await fetch("https://api.imgflip.com/get_memes")
    let jsonResponse = await response.json()
    if(response.ok) {
        let randomValue;

        let h5s = document.getElementsByTagName("h5"); // return: []
        let imgs = document.getElementsByTagName("img"); // return: []

        for (let index = 0; index < h5s.length; index++) { // 11 memes
            randomValue = Math.floor(Math.random() * 100) // randomValue recebe um valor aleatório entre 0 e 99
            h5s[index].innerHTML = jsonResponse.data.memes[randomValue].name; // no h5 do index atual -> nome do meme
            imgs[index].src = jsonResponse.data.memes[randomValue].url; // na img do index atual -> url da imagem no atributo src
        }
    }
}