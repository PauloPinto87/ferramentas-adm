function somarInputs(){
    var inputValor = document.getElementsByTagName('input')
    var resSoma = document.getElementById('resConta')
    var resMsg = document.getElementById('resMsg')
    var soma = Number(inputValor[0].value) + Number(inputValor[1].value)

    for (passo = 2; passo < inputValor.length; passo++) {

        soma = soma - Number(inputValor[passo].value)

    }

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

    