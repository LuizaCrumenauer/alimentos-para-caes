function pesquisar(){
    let section = document.getElementById("informacoes");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa.trim() === "") {
        section.innerHTML = 
        `
        <div class="alert">
            <p  >Nenhum alimento foi encontrado!</p>
        </div>
        `;
        return;
    }
    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let nome = "";
    let descricao = "";
    let tags = "";

    for (let categoria of ["permitidos", "moderacao", "proibidos"]) {
        for (let info of alimentosCachorro[categoria]) {
        
            nome = info.nome.toLocaleLowerCase();
            descricao = info.descricao.toLocaleLowerCase();
            tags = info.tags.toLocaleLowerCase();

            if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
                // Define a cor da classe com base na categoria atual
                let corClasse = "";
                if (categoria === "permitidos") {
                    corClasse = "verde";  // Aplica a classe 'verde'
                } else if (categoria === "moderacao") {
                    corClasse = "amarelo";  // Aplica a classe 'amarelo'
                } else if (categoria === "proibidos") {
                    corClasse = "vermelho";  // Aplica a classe 'vermelho'
                }

                resultados += 
                `
                    <div class="resultado ${corClasse}">
                        <img src="${info.imagem}" alt="Imagem de ${info.nome}" class="results_image">
                        <h3><strong>${info.nome}</strong></h3>
                        <p>${info.descricao}</p>
                    </div>
                `;
            }
           
        }
    
    }
    if(!resultados){
        section.innerHTML = `<p class="alert">Nenhum alimento foi encontrado!</p>`;
        return
    }
    section.innerHTML = resultados;
}