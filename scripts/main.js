function somarInputs(){
    var inputValor = document.getElementsByTagName('input')
    var resSoma = document.getElementById('resConta')
    var resMsg = document.getElementById('resMsg')
    var soma = Number(inputValor[0].value)

    for (passo = 1; passo < inputValor.length; passo++) {

        soma = soma - Number(inputValor[passo].value)

    }

    if (soma > 0) {
        resMsg.innerHTML = 'Você precisa:'
        resSoma.innerHTML = `RECEBER: € ${Math.abs(soma).toFixed(2)}`
        resSoma.style.color = 'red'
        resSoma
    }
    else if (soma < 0) {
        resMsg.innerHTML = 'Você precisa:'
        resSoma.innerHTML = `ENTREGAR: € ${Math.abs(soma).toFixed(2)}`
        resSoma.style.color = '#B8860B'
    }
    else {
        resMsg.innerHTML = 'Esta tudo certo'
        resSoma.innerHTML = `RESULTADO: € ${Math.abs(soma).toFixed(2)}`
        resSoma.style.color = 'green'
    }
    
  
  
}

    