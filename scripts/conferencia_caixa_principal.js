/* Configuração do Modal Genericos */
const modalGenerico = document.querySelector('#modalGenerico')
const openModalGenerico = document.querySelector('.open-button-Generico')
const closeModalGenerico = document.querySelector('.close-button-Generico')
openModalGenerico.addEventListener('click', () => {
    modalGenerico.show()
})
closeModalGenerico.addEventListener('click', () => {
    modalGenerico.close()
})

/* Configuração do Modal Genericos */
const modalNotasMoedas = document.querySelector('#modalNotasMoedas')
const openModalNotasMoedas = document.querySelector('.open-button-NotasMoedas')
const closeModalNotasMoedas = document.querySelector('.close-button-NotasMoedas')
openModalNotasMoedas.addEventListener('click', () => {
    modalNotasMoedas.show()
})
closeModalNotasMoedas.addEventListener('click', () => {
    modalNotasMoedas.close()
})

/* Calcula o GENERICO e poem no input correspondente */
let somaNotasMoedas = 0

function somarNotasMoedas() {
    var inputNotasMoedas = document.getElementById('modalNotasMoedas').childNodes
    var totalNotasMoedas = document.getElementById('totalNotasMoedas')
    var NotasMoedas = document.getElementById('NotasMoedas')
    var texto = ''
    var valorNota = 0
    var qntNotas = 0

    var valorMoeda = 0
    var qntMoedas= 0

    somaNotasMoedas = 0
    
    for (passo = 1; passo < inputNotasMoedas.length-4; passo = passo + 2) {
        texto = inputNotasMoedas[passo].childNodes[3].id

        if (texto.substr(0,4) == 'nota') {
            valorNota = Number(texto.substr(4,))
            qntNotas = Number(inputNotasMoedas[passo].childNodes[3].value)

            somaNotasMoedas = somaNotasMoedas + (qntNotas*valorNota)
        } else {
            valorMoeda = Number(texto.substr(5,).replace('x', '.'))
            qntMoedas = Number(inputNotasMoedas[passo].childNodes[3].value)

            somaNotasMoedas = somaNotasMoedas + (valorMoeda*qntMoedas)
        }
    }




    totalNotasMoedas.innerHTML = `€ ${somaNotasMoedas.toFixed(2)}`
    NotasMoedas.value = somaNotasMoedas.toFixed(2)
}

/* Calcula a multiplicação entre notas e suas quantidades assim como as moedas,
depois soma todas essas multiplicações e preenche os devidos inputs */

