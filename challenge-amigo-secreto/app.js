let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (!nome) {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nome);
    atualizarListaAmigos();
    input.value = '';
}

function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.className = 'list-item';
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo!');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li class="result-item">${amigos[indiceSorteado]}</li>`;
}