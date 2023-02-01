function newElement(tagName, classe){
    const element = document.createElement(tagName)
    element.className = classe
    return element
}

function estilizaBotao(conteudo){
    const change = newElement('div', 'botao')
    change.style.border= '2px solid black'
    change.style.fontSize = '4rem'
    change.style.padding = '2.875rem 4.875rem'
    change.style.fontWeight = 'bold'
    change.style.textTransform = 'uppercase'
    change.style.cursor = 'pointer'
    change.style.marginTop= '5em'
    change.style.color= 'gray'
    change.innerHTML = conteudo
    return change
}
const body = document.querySelector('body')
const colors = ['black', 'white', 'purple', 'pink', 'red', 'green', 'yellow', 'grey', 'orange', 'blue']

body.style.display = 'flex'
body.style.justifyContent= 'center'


// começo do desenvolvimento

const botaoEstilizado = estilizaBotao('Clique')
body.appendChild(botaoEstilizado)

botaoEstilizado.addEventListener('click', (e)=>{
    body.style.backgroundColor = `${colors[Math.floor(Math.random() * 10)]}`
})
