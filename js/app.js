function pesquisar(){
    let section = document.getElementById("informacoes");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa.trim() === "") {
        section.innerHTML = "<p>Nenhum alimento foi encontrado!</p>";
        return;
    }
    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let nome = "";
    let descricao = "";
    let tags = "";

    for (let info of alimentosCachorro.permitidos ){
        
        nome = info.nome.toLocaleLowerCase();
        descricao = info.descricao.toLocaleLowerCase();
        tags = info.tags.toLocaleLowerCase();

        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += 
            `
                <div class="resultado">
                    <img src="${info.imagem}" alt="Imagem de ${info.nome}" class="results_image">
                    <p><strong>${info.nome}</strong></p>
                    <p>${info.descricao}</p>
                </div>
            `;
        }
        if(!resultados){
            section.innerHTML = "<p>Nenhum alimento foi encontrado!</p>";
            return
        }
     
    }
    section.innerHTML = resultados;
}