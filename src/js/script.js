const baseURL = 'https://api.pexels.com/v1/'
const divPaiImages = document.getElementById('lugarImagem')


let index = 1
let numDeImagens = 10

async function getAllPhotos(){
    limparDivPai()
    const response = await fetch(`${baseURL}/curated?page=${index}&per_page=${numDeImagens}`,{
        headers: {
            Authorization : 'u5wO8T5B8LbXRUytoWq7z31BkVMPk9XqQfGChbFw1eb7QDdswaYbnZQ7'
        }
    })
    
    const data = await response.json()

    for(const item of data.photos){

        const urlImg = item.src.tiny
       
        const divImg = document.createElement('img')
        divImg.setAttribute('src', urlImg)
        divPaiImages.appendChild(divImg)
    }

}
getAllPhotos()

function limparDivPai(){
    divPaiImages.innerHTML = ''
}

function changePage(button){
   if(button === 'proximo'){
    index = index + 1
    getAllPhotos()
   }
   if(button === 'voltar' && index > 1){
    index = index - 1
    getAllPhotos()
   }
}

function mudarNumerodeFotos(){
    const selectValue = document.getElementById('selectPage').value
    
    numDeImagens = selectValue
    getAllPhotos()
   
}
