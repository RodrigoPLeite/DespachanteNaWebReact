export function getNome() {
    return localStorage.getItem('nomeLogado')
}

export function limparStorage() {
    localStorage.clear();
}

export function setNome(nomeLogado) {
    console.log(nomeLogado);
    localStorage.setItem('nomeLogado', nomeLogado);
}