const gallery = document.querySelector('.gallery')
const objets = document.querySelector('.objets')
const appart = document.querySelector('.appartements')
const hotel = document.querySelector('.hotel-resto')
const tousLesProjets = document.querySelector('.tous')
 
async function reponseProjet(){
    return await fetch("http://localhost:5678/api/works").then(reponse => reponse.json())
}

reponseProjet().then(donnees =>{
        
        let data = donnees

    function allProjects(){

        for(let i = 0; i < data.length; i++){

            let imgProjet = document.createElement('img');
            let titleProjet = document.createElement('figcaption');
            let figureProjet = document.createElement('figure');

            imgProjet.src = data[i].imageUrl;
            titleProjet.innerText = data[i].title;

            figureProjet.appendChild(imgProjet);
            figureProjet.appendChild(titleProjet);

            gallery.appendChild(figureProjet)

        }
        
    }
    allProjects()


        tousLesProjets.addEventListener('click', ()=>{
            function allPhotos (){
                for(let i = 0; i < data.length; i++){
                let image = document.createElement('img');
                let titleimg = document.createElement('figcaption');
                let figure = document.createElement('figure');

                image.src = data[i].imageUrl;
                titleimg.innerText = data[i].title;

                figure.appendChild(image);
                figure.appendChild(titleimg);
                gallery.appendChild(figure);
            
                }
            }
            
            gallery.innerHTML = ""
            allPhotos()

        })


        objets.addEventListener('click', ()=>{
             
            function appelObj(){ 

                const imgObj = data.filter(function (dt){
                    return dt.category.id === 1;
                })   

                for(let i = 0; i < imgObj.length; i++){

                    let image = document.createElement('img')
                    let titleImg = document.createElement('figcaption')
                    let figure = document.createElement('figure')

                    image.src = imgObj[i].imageUrl
                    titleImg.innerText = imgObj[i].title

                    figure.appendChild(image)
                    figure.appendChild(titleImg)
                    
                    gallery.appendChild(figure)
                }     

            }
            gallery.innerHTML = ""  
            appelObj()     

        })


        appart.addEventListener('click', ()=>{

            function appelAppart(){      

                const appartValue = data.filter(function(dt){
                   return dt.category.id === 2
                })
            
                for(let i = 0; i < appartValue.length; i++){
                        let image = document.createElement('img')
                        let titleimg = document.createElement('figcaption')
                        let figure = document.createElement('figure')

                        image.src = appartValue[i].imageUrl
                        titleimg.innerText = appartValue[i].title

                        figure.appendChild(image)
                        figure.appendChild(titleimg)

                        gallery.appendChild(figure)
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
                    return dt.category.id == 3
                })

                for(let i = 0; i < resto.length; i++){

                    let  image = document.createElement('img')
                    let  titleResto = document.createElement('figcaption')
                    let  figure = document.createElement('figure')

                        image.src = resto[i].imageUrl
                        titleResto.innerText = resto[i].title

                        figure.appendChild(image)
                        figure.appendChild(titleResto)

                        gallery.appendChild(figure)
                    
                }
                
            }

             gallery.innerHTML = ""
             HotelAndRestaurant()
        })


})
   




