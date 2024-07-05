const gallery = document.querySelector('.gallery')
async function reponseModale (){

    return await fetch("http://localhost:5678/api/works").then(reponse => reponse.json())

}
reponseModale().then(donnees =>{    
    let data = donnees 

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

const lienModale = document.querySelector('.lien-modale1')
const modale1 = document.querySelector('.modale1')
const btnEchappe = document.querySelectorAll('.btn-modale')
const contentImg = document.querySelector('.content-img')
const BtnAjouterPhoto = document.querySelector('.btn-ajouter')
const modale2 = document.querySelector('.modale2')
const contentModale1 = document.querySelector('.content-modale1')
const contentModale2 = document.querySelector('.content-modale2')

const btnFleche = document.querySelector('.btn-fleche')



btnEchappe.forEach(sortie => {
    sortie.addEventListener('click', ()=>{
        modale1.style.display = "none"
        modale2.style.display = "none"

    })
})

btnFleche.addEventListener('click', () =>{
        modale1.style.display = "block"
        modale2.style.display = "none"
})



// gestion du click en dehors de la modale
function gestionClickModale () {    
    modale1.addEventListener('click', ()=>{
        modale1.style.display = "none";
        contentModale1.style.display = "none"
    })

    contentModale1.addEventListener('click', (e)=>{
        e.stopPropagation()

    })


    modale2.addEventListener('click', ()=>{
        modale2.style.display = "none";
        contentModale2.style.display = "none"
    })

    contentModale2.addEventListener('click', (e)=>{
        e.stopPropagation()

    })

    const Elementsfocusable = 'button, a, input, select'
    let focussables1 = []
    let focussables2 = []

    const FocusInModale = function (e){ 
        e.preventDefault()
        let index = focussables1.findIndex(f => f === modale1.querySelector(':focus'))
        index++
        if(index >= focussables1.length){
            index = 0
        }
        focussables1[index].focus()
            
    }

    const  FocusInModale2 = function (e){
        e.preventDefault()
        let index = focussables2.findIndex(f => f === modale2.querySelector(':focus'))
        index++
        if(index >= focussables2.length){
            index = 0
        }
        focussables2[index].focus()
    }


    BtnAjouterPhoto.addEventListener('click', ()=>{
        modale1.style.display = "none"
        modale2.style.display = "block"
        contentModale2.style.display = 'block';

        focussables2 = Array.from(modale2.querySelectorAll(Elementsfocusable))
    })


    lienModale.addEventListener('click', ()=>{
        modale1.style.display = 'block';
        contentModale1.style.display = 'block';
        focussables1 = Array.from(modale1.querySelectorAll(Elementsfocusable))

    })
    //click pour sortir de la modale avec échape

    window.addEventListener("keydown", (e)=>{
        if(e.key === "Escape" || e.key === "Esc"){
            modale1.style.display = 'none'
            modale2.style.display = 'none'
        }
        //gestion de la touche Tab quand la modale est ouverte
        if(e.key === "Tab" && modale1.style.display === "block"){
            FocusInModale(e)
        }  
        if(e.key === "Tab" && modale2.style.display === "block"){
            FocusInModale2(e)
        }  
    })

}
gestionClickModale()

// partie de la modale 1
async function editionProjet (){
   return await fetch("http://localhost:5678/api/works").then(mod => mod.json())
}
editionProjet().then(modaleImg =>{
        const dataImg = modaleImg

        for(let i = 0; i < dataImg.length; i++){

            const imgMod = document.createElement('img');
            const imgcorbeille = document.createElement('img')
            const imgTrash = document.createElement('span')
            const articleMod = document.createElement('article');

            imgMod.src = dataImg[i].imageUrl
            imgcorbeille.src = 'assets/icons/trash-can-solid.svg' 
            imgTrash.id = dataImg[i].id

            articleMod.classList.add('article-modale')
            imgTrash.classList.add('span-trash')

            imgTrash.appendChild(imgcorbeille)

            articleMod.appendChild(imgMod)
            articleMod.appendChild(imgTrash)

            contentImg.appendChild(articleMod)     

        }

        /*******delete Projet */          
    let spanDelete = document.querySelectorAll('.span-trash')

        spanDelete.forEach(deleleProjet =>{
            deleleProjet.addEventListener('click', async ()=>{
                const token = localStorage.getItem('token')

                    await fetch(`http://localhost:5678/api/works/${deleleProjet.id}`, {
                        method: 'DELETE', 
                        body: null,
                        headers: {"Authorization": "Bearer " + token}
                    })      
            })

        }) 


})



// modale 2 
const inpFile = document.querySelector('#inpFile')
const btnModale2 = document.querySelector('.btn-img')
const sizeImg = document.querySelector('.size-img')
const dropImage = document.querySelector('.ajout-photo');

/***ici on appelle la fenetre */
btnModale2.addEventListener('click', ()=>{
    if(inpFile){
        inpFile.click()
    }
})
/***gesttion du click inputFile  */

inpFile.addEventListener('change', chargeInput, false)

function chargeInput(){
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


/***modale 2 */

const formulaireAjoutImg = document.getElementById('form-ajouter')
const inpTitel = document.querySelector('#inpTitel')
const selection = document.querySelector('#selection')
const valider = document.querySelector('.valider')
const option = document.querySelector('option')

function gestionBtnvalider(){ 

    inpTitel.addEventListener('input', () =>{
        if(inpTitel.value.trim() !== "" && selection.value !== ""){
            valider.style.backgroundColor = '#1D6154'
        }
        else{valider.style.backgroundColor = '#A7A7A7'}

    })

    selection.addEventListener('change', ()=>{  
        if(selection.value !== "" && inpTitel.value.trim() !== ""){
            valider.style.backgroundColor = '#1D6154'
        }
        else{valider.style.backgroundColor = '#A7A7A7'}
        
    })
    }
gestionBtnvalider()


formulaireAjoutImg.addEventListener('submit', async function(e){
    e.preventDefault()

    if(inpTitel.value === ""){
        alert("Votre projet doit avoir un titre")
        modale2.style.display = "block"
    }


let nvFile = inpFile.files[0]

    let nvProjet = new FormData()
    nvProjet.append("image", nvFile)
    nvProjet.append("title", inpTitel.value)
    nvProjet.append("category", selection.value)

    const token = localStorage.getItem('token')
 
    const request = await fetch("http://localhost:5678/api/works", 
        {
            method: "POST",
            headers: {"Authorization": "Bearer " + token},
            body: nvProjet
    })
        await request.json()

}, false)








 

