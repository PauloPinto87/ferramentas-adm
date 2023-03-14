/* Configurações do Modal Trocos */
const modalTrocos = document.querySelector('#modalTrocos')
const openModalTrocos = document.querySelector('.open-button-Trocos')
const closeModalTrocos = document.querySelector('.close-button-Trocos')
openModalTrocos.addEventListener('click', () => {
    modalTrocos.show()
})
closeModalTrocos.addEventListener('click', () => {
    modalTrocos.close()
})

/* Configurações do Modal Ubers */
const modalUbers = document.querySelector('#modalUbers')
const openModalUbers = document.querySelector('.open-button-Ubers')
const closeModalUbers = document.querySelector('.close-button-Ubers')
openModalUbers.addEventListener('click', () => {
    modalUbers.show()
})
closeModalUbers.addEventListener('click', () => {
    modalUbers.close()
})

/* Configurações do Modal Glovos */
const modalGlovos = document.querySelector('#modalGlovos')
const openModalGlovos = document.querySelector('.open-button-Glovos')
const closeModalGlovos = document.querySelector('.close-button-Glovos')
openModalGlovos.addEventListener('click', () => {
    modalGlovos.show()
})
closeModalGlovos.addEventListener('click', () => {
modalGlovos.close()
})


/* Calcula o TROCOS e poem no input correspondente */
let somaTroco = 0

function somarTrocos (){
    var inputTroco = document.getElementById('modalTrocos').childNodes
    var totalTrocos = document.getElementById('totalTrocos')
    var Troco = document.getElementById('Trocos')
    somaTroco = 0

    for (passo = 1; passo < inputTroco.length-4; passo = passo + 2) {
        somaTroco = somaTroco + Number(inputTroco[passo].childNodes[3].value)
    }
    totalTrocos.innerHTML = `€ ${somaTroco.toFixed(2)}`

    Troco.value = somaTroco.toFixed(2)
}

/* Calcula os UBERS e poem no input correspondente */
let somaUbers = 0

function somarUbers() {
    var inputUbers = document.getElementById('modalUbers').childNodes
    var totalUbers = document.getElementById('totalUbers')
    var Uber = document.getElementById('Uber')

    somaUbers = 0
    for (passo = 1; passo < inputUbers.length-5; passo = passo + 2) {
        somaUbers = somaUbers + Number(inputUbers[passo].childNodes[3].value)
        console.log(somaUbers)
    }

    totalUbers.innerHTML = `€ ${somaUbers.toFixed(2)}`
    Uber.value = somaUbers.toFixed(2)
}

/* Função que calcula os GLOVOS e poem no input correspondente */
let somaGlovos = 0

function somarGlovos() {
    var inputGlovos = document.getElementById('modalGlovos').childNodes
    var totalGlovos = document.getElementById('totalGlovos')
    var Glovo = document.getElementById('Glovo')

    somaGlovos = 0
    for (passo = 1; passo < inputGlovos.length-5; passo = passo + 2) {
        somaGlovos = somaGlovos + Number(inputGlovos[passo].childNodes[3].value)
        console.log(somaGlovos)
    }

    totalGlovos.innerHTML = `€ ${somaGlovos.toFixed(2)}`
    Glovo.value = somaGlovos.toFixed(2)
}



/* Função que soma todos os inputs principais para retornar um resultado */
function somarInputs(){
    var inputValor = document.getElementsByClassName('box-label-input')
    var resSoma = document.getElementById('resConta')
    var resMsg = document.getElementById('resMsg')
    var soma = 0
    var InputVazio = ''

    for (passo = 0; passo < inputValor.length; passo++) {
        if (inputValor[passo].childNodes[3].value.length == 0){
            InputVazio = true 
        }else {
            InputVazio = false
        }

        if (passo < 3) {
            soma = soma + Number(inputValor[passo].childNodes[3].value)
        }
        else {
            soma = soma - Number(inputValor[passo].childNodes[3].value)
        }

    }

    if (InputVazio == true) {
        resMsg.innerHTML = 'ATENÇÃO:'
        resSoma.innerHTML = `EXISTEM CAMPOS VAZIOS<br>PREENCHA TUDO!!`
        resSoma.style.color = 'red'
        resSoma.classList.add('red')
        resSoma.classList.remove('yellow', 'green')
    }else {
        if (soma > 0) {
            resMsg.innerHTML = 'Você precisa:'
            resSoma.innerHTML = `RECEBER: € ${Math.abs(soma).toFixed(2)}`
            resSoma.style.color = 'red'
            resSoma.classList.add('red')
            resSoma.classList.remove('yellow', 'green')
        }
        else if (soma < 0) {
            resMsg.innerHTML = 'Você precisa:'
            resSoma.innerHTML = `ENTREGAR: € ${Math.abs(soma).toFixed(2)}`
            resSoma.style.color = '#B8860B'
            resSoma.classList.add('yellow')
            resSoma.classList.remove('red', 'green')
        }
        else {
            resMsg.innerHTML = 'Esta tudo certo'
            resSoma.innerHTML = `RESULTADO: € ${Math.abs(soma).toFixed(2)}`
            resSoma.style.color = 'green'
            resSoma.classList.add('green')
            resSoma.classList.remove('yellow', 'red')
        }
    }
}


    