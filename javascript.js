// Selecionando os elementos da tela
const inputNome = document.getElementById('input-nome');
const tituloUsuario = document.getElementById('titulo-usuario');
const inputCor = document.getElementById('input-cor');
const cardPersonalizacao = document.querySelector('.card');
const btnSalvar = document.getElementById('btn-salvar');
const blocoNotas = document.getElementById('bloco-notas');

// 1. QUANDO A PÁGINA CARREGA: Verifica se já existe algo salvo
window.addEventListener('load', () => {
    const nomeSalvo = localStorage.getItem('usuario_nome');
    if (nomeSalvo) {
        tituloUsuario.textContent = `Espaço de Estudos de ${nomeSalvo}`;
        inputNome.value = nomeSalvo;
    }

    const corSalva = localStorage.getItem('usuario_cor');
    if (corSalva) {
        cardPersonalizacao.style.backgroundColor = corSalva;
        inputCor.value = corSalva;
    }

    const notasSalvas = localStorage.getItem('usuario_notas');
    if (notasSalvas) {
        blocoNotas.value = notasSalvas;
    }
});

// 2. BOTÃO SALVAR: Guarda as escolhas do usuário
btnSalvar.addEventListener('click', () => {
    const novoNome = inputNome.value;
    const novaCor = inputCor.value;

    if (novoNome) {
        tituloUsuario.textContent = `Espaço de Estudos de ${novoNome}`;
        localStorage.setItem('usuario_nome', novoNome);
    }

    cardPersonalizacao.style.backgroundColor = novaCor;
    localStorage.setItem('usuario_cor', novaCor);

    alert('Configurações salvas com sucesso!');
});

// 3. BLOCO DE NOTAS: Salva o texto automaticamente enquanto o usuário digita
blocoNotas.addEventListener('input', () => {
    localStorage.setItem('usuario_notas', blocoNotas.value);
});
