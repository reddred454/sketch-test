const container = document.querySelector('.container');




function drawDiv(){
    for (let i = 1; i < 256; i++ ){
        const div = document.createElement('div');
        div.classList.add('block')
        container.append(div)

        
    }
}

drawDiv();

function createRandomColor(min, max){
    let randOne = Math.floor(min + Math.random() * (max + 1 - min))
    let randTwo = Math.floor(min + Math.random() * (max + 1 - min))
    let randThree = Math.floor(min + Math.random() * (max + 1 - min))
    let color;
    for (let i = 0; i < 3; i++ ){
        color = `rgb(${randOne},${randTwo},${randThree})`
    }
    return color
}


const divs = document.querySelectorAll('div > .block');
divs.forEach(div => {
    div.addEventListener('mousemove', () => {
        const bgColor = createRandomColor(0, 255);
        div.style.backgroundColor = bgColor      
        console.log(bgColor);
           
    })
})





