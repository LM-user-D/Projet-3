const gallery = document.querySelector('.gallery')
const objs = document.querySelector('.objets')
const appart = document.querySelector('.appartements')
const hotel = document.querySelector('.hotel-resto')
const tous = document.querySelector('.tous')

async function attenteReponse (){

    return await fetch("http://localhost:5678/api/works").then(reponse => reponse.json())

}

 
attenteReponse().then(donnees =>{
        
        let data = donnees

        tous.addEventListener('click', ()=>{
            function allPhotos (){
                for(let i = 0; i < data.length; i++){
                let image = document.createElement('img');
                let title = document.createElement('figcaption');
                let figure = document.createElement('figure');

                image.src = data[i].imageUrl;
                title.innerText = data[i].title;

                figure.appendChild(image);
                figure.appendChild(title);
                gallery.appendChild(figure);
            
                }
            }
            
            gallery.innerHTML = ""
            allPhotos()

        })


        objs.addEventListener('click', ()=>{
             
            function appelObj(){ 

                const imgObj = data.filter(function (dt){
                    return dt.category.name == 'Objets';
                })   

                for(let i = 0; i < imgObj.length; i++){

                    let imgBox = document.createElement('img')
                    let titleImg = document.createElement('figcaption')
                    let figureObj = document.createElement('figure')

                    imgBox.src = imgObj[i].imageUrl
                    titleImg.innerText = imgObj[i].title

                    figureObj.appendChild(imgBox)
                    figureObj.appendChild(titleImg)
                    
                    gallery.appendChild(figureObj)

                }     

            }
            gallery.innerHTML = ""  
            appelObj()     

        })


        appart.addEventListener('click', ()=>{

            function appelAppart(){      

                const appartValue = data.filter(function(dt){
                  
                   return dt.category.name == 'Appartements'
                })
            
                for(let i = 0; i < appartValue.length; i++){
                        let imgAppart = document.createElement('img')
                        let titleAppart = document.createElement('figcaption')
                        let figureAppart = document.createElement('figure')

                        imgAppart.src = appartValue[i].imageUrl
                        titleAppart.innerText = appartValue[i].title

                        figureAppart.appendChild(imgAppart)
                        figureAppart.appendChild(titleAppart)

                        gallery.appendChild(figureAppart)
                        console.log(gallery)

                }

                }      
                 gallery.innerHTML = ""
                 appelAppart()
            }
            
        )


        hotel.addEventListener('click', ()=>{

            function HotelAndRestaurant (){
                const resto = data.filter(function(dt){
                    return dt.category.name == "Hotels & restaurants"
                })

                for(let i = 0; i < resto.length; i++){
                    imgResto = document.createElement('img')
                    titleResto = document.createElement('figcaption')
                    figureResto = document.createElement('figure')

                    imgResto.src = resto[i].imageUrl
                    titleResto.innerText = resto[i].title

                    figureResto.appendChild(imgResto)
                    figureResto.appendChild(titleResto)

                    gallery.appendChild(figureResto)

                    
                }
                
                
            }

             gallery.innerHTML = ""
             HotelAndRestaurant()
        })

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

        if (!file.type.startsWith("image/")) {
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
            
            if (!file.type.startsWith("image/") ) {
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



