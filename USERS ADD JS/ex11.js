let contagem_click = 0

function EscalarJogador(){
    if(contagem_click===0){
        const tr = document.createElement('tr')
        const td = document.createElement('td')

        const sec_info = document.getElementById('sec_informacao')
    
        const label_posicao = document.createElement('label')
        label_posicao.innerHTML = '<label for="posicao">Posição: </label>'

        const label_nome = document.createElement('label')
        label_nome.innerHTML = '<label for="nome_jogador">Nome: </label>'
        
        const label_numero = document.createElement('label')
        label_numero.innerHTML = '<label for="numero_jogador">Numero: </label>'
    
        const posicao_jogador = document.createElement('input')
        posicao_jogador.id = 'posicao'
        posicao_jogador.type = 'text'
        posicao_jogador.name = 'input'
        posicao_jogador.placeholder = 'Insira o nome da posição'

        const nome_jogador = document.createElement('input')
        nome_jogador.id = 'nome_jogador'
        nome_jogador.type = 'text'
        nome_jogador.name = 'input'
        nome_jogador.placeholder = 'Insira o nome do Jogador'

        const numero_jogador = document.createElement('input')
        numero_jogador.id = 'numero_jogador'
        numero_jogador.type = 'text'
        numero_jogador.name = 'input'
        numero_jogador.placeholder = 'Insira o numero do jogador'
    
        sec_info.appendChild(label_posicao)
        sec_info.appendChild(posicao_jogador)
        sec_info.appendChild(document.createElement('br'))
        sec_info.appendChild(document.createElement('br'))
        sec_info.appendChild(label_nome)
        sec_info.appendChild(nome_jogador)
        sec_info.appendChild(document.createElement('br'))
        sec_info.appendChild(document.createElement('br'))
        sec_info.appendChild(label_numero)
        sec_info.appendChild(numero_jogador)
        sec_info.appendChild(document.createElement('br'))
        sec_info.appendChild(document.createElement('br'))
        contagem_click ++

        const button_confirmar = document.createElement('button')
        button_confirmar.id = 'confirmar-button'
        button_confirmar.innerText = "Confirmar"
        button_confirmar.type = 's'

        let confirmacao = button_confirmar.onclick = ButtonConfirmar
        sec_info.appendChild(button_confirmar)
        if(confirmacao){
            let jogador = document.getElementById('nome_jogador').value
            let numero = document.getElementById('numero_jogador').value
            let posicao = document.getElementById('posicao').value
            
        }
    }
}
function ButtonConfirmar(){
    confirm("Deseja escalar esse jogador?")
}
function ButtonRemover(){
    confirm("Deseja remover esse jogador?")
}

