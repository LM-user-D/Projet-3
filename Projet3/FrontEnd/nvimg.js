const gallery = document.querySelector('.gallery')

async function attenteReponse (){

    return await fetch("http://localhost:5678/api/works").then(reponse => reponse.json())

}


attenteReponse().then(donnees =>{
        
    let data = donnees
    
    console.log(data)

    gallery.innerHTML = ""

            for(let i = 0; i < data.length; i++){
            let image = document.createElement('img');
            let title = document.createElement('figcaption');
            let figure = document.createElement('figure');

            image.src = data[i].imageUrl;
            title.innerText = data[i].title;

            figure.appendChild(image);
            figure.appendChild(title);
            
            gallery.appendChild(figure);}
    
            

})
 
//Partie de la modale1

const lien = document.querySelector('.lien-modale1')
const modale1 = document.querySelector('.modale1')
const btnModale1 = document.querySelector('.btn-modale1')
const contentImg = document.querySelector('.content-img')
const BtnAjouterPhoto = document.querySelector('.btn-ajouter')
const modale2 = document.querySelector('.modale2')


btnModale1.addEventListener('click', ()=>{
    modale1.style.display = "none"
})

lien.addEventListener('click', ()=>{
    modale1.style.display = 'block'
})

BtnAjouterPhoto.addEventListener('click', ()=>{
    modale1.style.display = "none"
    modale2.style.display = "block"
})


async function appelModale (){
   return await fetch("http://localhost:5678/api/works").then(mod => mod.json())
}

appelModale().then(modaleImg =>{
        const dataImg = modaleImg

        for(let i = 0; i < dataImg.length; i++){

            const imgMod = document.createElement('img');
            const imgcorbeille = document.createElement('img')
            const imgTrash = document.createElement('span')
            const articleMod = document.createElement('article');

            imgMod.src = dataImg[i].imageUrl
            imgcorbeille.src = 'trash-can-solid.svg' 

            articleMod.classList.add('article-modale')
            imgTrash.classList.add('span-trash')

            imgTrash.appendChild(imgcorbeille)

            articleMod.appendChild(imgMod)
            articleMod.appendChild(imgTrash)

            
            contentImg.appendChild(articleMod)

        }

        /*******delete images */

        const spanDelete = document.querySelectorAll('.span-trash')

            spanDelete.forEach(element => {
            element.addEventListener('click', ()=>{
                        element.parentElement.style.display = "none"

                        })
        
        });

        /*******delete images */          

})



/***modale 2 */

const inputModale2 = document.querySelector('#inpFile')
const btnModale2 = document.querySelector('.btn-inp')
const sizeImg = document.querySelector('.size-img')
/***ici on appelle la fenetre */
btnModale2.addEventListener('click', ()=>{
    if(inputModale2){
        inputModale2.click()
    }
})
/***ici on appelle la fenetre */


inputModale2.addEventListener('change', chargeInp, false)

function chargeInp(){
    const filesListe = this.files
    
    for (let i = 0; i < filesListe.length; i++) {
        const file = filesListe[i];
        
        const maxSize = 4 * 1024 * 1024;
        const formatImg = ['image/jpeg','image/WebP','image/png']

        if (!file.type.includes(formatImg[i])) {
            continue;
        }
        
              //gestion de la taille   
        else if(file.size > maxSize){     
            sizeImg.innerText = "L'image est trop volumineuse"
            sizeImg.style.color = "red"
            return false   
        }


        const img = document.createElement("img");
        img.classList.add("obj");
        img.file = file;

        //suppression  de la premiere image avec innerHTML 
        dropImage.innerHTML = ''

        dropImage.appendChild(img); // Où  "preview" correspond à l'élément div où on affiche le contenu.
    
        const reader = new FileReader();
        reader.onload = (e) => {
          img.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }

}


/***drop ******/

let dropImage;
dropImage = document.querySelector('.ajout-photo');
    dropImage.addEventListener('dragenter', dragenter, false)
    dropImage.addEventListener('dragover', dragover, false)
    dropImage.addEventListener('drop', drop, false)

function dragenter(e){
    e.stopPropagation()
    e.preventDefault()
}

function dragover(e){
    e.stopPropagation()
    e.preventDefault()
}

function drop(e){
    e.stopPropagation()
    e.preventDefault()

    const dataTrans = e.dataTransfer;
    const filesData = dataTrans.files
    hanleFiles(filesData)
}


function hanleFiles(filesData){
    
        for (let i = 0; i < filesData.length; i++) {
            const file = filesData[i];
             const maxSize = 4 * 1024 * 1024;
             
             const formatImg = ['image/jpeg','image/WebP','image/png']

            if (!file.type.includes(formatImg[i])) {
            continue;
        }
            
              //gestion de la taille   
            else if(file.size > maxSize){     
                sizeImg.innerText = "l'image est trop volumineuse"
                return false   
            }


            const img = document.createElement("img");
            img.classList.add("obj");
            
            img.file = file;
            //suppression  de la premiere image avec innerHTML 
            dropImage.innerHTML = ''
            dropImage.appendChild(img); // Où  "preview" correspond à l'élément div où on affiche le contenu.
        
            const reader = new FileReader();
            reader.onload = (e) => {
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
            }
      
      

}

/***drop ******/


/***modale 2 */

const formulaireAjoutImg = document.getElementById('form-ajouter')

const inpFile = document.querySelector('#inpFile')

    
formulaireAjoutImg.addEventListener('submit', (e)=>{

  
    const nvImg = {
        title: e.target.querySelector('#inpTitel').value,
        
        category: {name : e.target.querySelector('select').value},

        imageUrl: inpFile.onload = URL.createObjectURL(inpFile.files[0])
    }


console.log(charge)


async function envoyer (){

    e.preventDefault()
    const charge = JSON.stringify(nvImg)
    await fetch("http://localhost:5678/api/works",{
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body: charge
        }).then(rep => rep.json)
    }    

envoyer()

    })



  

        



