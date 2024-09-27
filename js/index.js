async function getData(){
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    const jsonArr = products.map(elemento => Object.entries(elemento));
    console.log(jsonArr)
    const jsonSlice = jsonArr.slice(0, 2);
    const jsonSlice2 = jsonArr.slice(0, 5);
    const arr = ["27 October", "2 November", "12 November", "6 December"]
    products.forEach(element => {
        const randInt = randonData(1, jsonArr.length);
        const randIndex = randInt;
        for(i = 0; i < jsonSlice.length; i++){
            if(element.id == i){
                for(j = 0; j < arr.length; j++){
                        const paragraph = document.createRange().createContextualFragment(`
                            
                        <div class="card card-${i}">
                            <h2>${arr[j]} <br></h2>
                            <p>${jsonArr[randIndex][j][i]}</p>
                            <button class="btn button-2">more details</button>
                        </div>
                            
                            `)
                            const card = document.querySelector('.about-row');
                            card.append(paragraph)
                    
                }
            }
        }

        for(i = 0; i < jsonSlice2.length; i++){
            if(element.id == i){
                const card = document.createRange().createContextualFragment(`
                    
                <div class="box box-${i}">
                    <img src="${jsonArr[randIndex][5][1]}" alt="">
                    <h3>Jhoanna Doe</h3>
                    <h4>Web Developer</h4>
                </div>
                    
                    
                    `)
                    const speakers_row = document.querySelector('.speakers-row');
                    speakers_row.append(card);
            }
        }

        function randonData(min, max){
              return Math.floor(Math.random() * (min - max + 1) + max)
        }
    });
}

getData()