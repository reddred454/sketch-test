const container = document.querySelector('.container');
const button = document.querySelector('.btn')

button.addEventListener('click', () => {
    let number = +prompt('Please number of square per side 1-100')
    console.log(number);
    const divs = document.querySelectorAll('div > .block')
    divs.forEach(div => {
        container.removeChild(div)
    })



    drawDiv(number)

})

function drawDiv(number = 8) {
    let counter = number * number
    console.log(counter);

    for (let i = 1; i <= counter; i++) {
        const div = document.createElement('div');
        div.classList.add('block')
        div.style.width = `${800 / number}px`
        div.style.height = `${800 / number}px`
        div.style.border = '1px solid #fefefe'
        div.style.backgroundColor = '#cccc'
        container.appendChild(div)


    }

    const divs = document.querySelectorAll('div > .block');
    divs.forEach(div => {
        div.addEventListener('mousemove', () => {
            const bgColor = createRandomColor(0, 255);
            div.style.backgroundColor = bgColor

        })
    })
}

drawDiv();

function createRandomColor(min, max) {
    let randOne = Math.floor(min + Math.random() * (max + 1 - min))
    let randTwo = Math.floor(min + Math.random() * (max + 1 - min))
    let randThree = Math.floor(min + Math.random() * (max + 1 - min))
    let color;
    for (let i = 0; i < 3; i++) {
        color = `rgb(${randOne},${randTwo},${randThree})`
    }
    return color
}






