const test = document.querySelector('.test')
const objs = document.querySelector('.objets')
const appart = document.querySelector('.appartements')

fetch("http://localhost:5678/api/works")
.then(reponse => reponse.json())
.then(donnees =>{
        
        let data = donnees

        for(let i = 0; i < data.length; i++){
            let image = document.createElement('img');
            let title = document.createElement('h3');
            let article = document.createElement('article');

            image.src = data[i].imageUrl;
            title.innerText = data[i].title;

            article.appendChild(image);
            article.appendChild(title);
            test.appendChild(article);
            
        }

        console.log(data)



        objs.addEventListener('click', ()=>{
            test.innerHTML = ""

            function appleObj(){

                const imgObj = data.map(obg => obg.category.name)

                        for(let i = imgObj.length -1; i >= 0; i--){
                            if(data[i].category.name !== 'Objets'){
                            data.splice(i,1)
                            }
                        }
                        
                        for(let i = 0; i < imgObj.length; i++){

                            let imgBox = document.createElement('img')
                            let titleImg = document.createElement('h3')
                            let articleObj = document.createElement('article')

                            imgBox.src = data[i].imageUrl
                            titleImg.innerText = data[i].title

                            articleObj.appendChild(imgBox)
                            articleObj.appendChild(titleImg)
                            
                            test.appendChild(articleObj)
                            console.log(imgBox)

                        }                      
                }
                test.innerHTML = appleObj()     
 })
    
        

        appart.addEventListener('click', ()=>{

            test.innerHTML = "";
            
            function appelAppart(){



          

                const appartValue = data.map(app => app.category.name)

                    for(let i = appartValue.length -1; i >= 0; i--){
                        if(data[i].category.name !== 'Appartements'){
                            data.splice(i,1) 
                        }           
                    }

                    for(let i = 0; i < appartValue.length; i++){
                            let imgAppart = document.createElement('img')
                            let titleAppart = document.createElement('h3')
                            let articleAppart = document.createElement('article')

                            imgAppart.src = data[i].imageUrl
                            titleAppart.innerText = data[i].title

                            articleAppart.appendChild(imgAppart)
                            articleAppart.appendChild(titleAppart)

                            test.appendChild(articleAppart)
                    }

                }            
                test.innerHTML = appelAppart()

        })







})