const alimentosCachorro = {
    permitidos: [
        {
            nome: "Pepino",
            descricao: "Baixo em calorias e rico em vitaminas, ajuda a hidratar e é uma opção de petisco leve.",
            imagem: "imagens/pepino.jpg",
            tags: "fruta salada vitaminas petisco" 
        },
        {
            nome: "Mirtilo (Blueberry)",
            descricao: "Rico em antioxidantes, que são benéficos para a saúde celular dos cães. Também contém fibras e vitamina C.",
            imagem: "imagens/mirtilo.jpg",
            tags: "fruta antioxidantes fibras vitamina c"
        },
        {
            nome: "Manga (sem caroço e casca)",
            descricao: "Rica em vitaminas A, B6, C e E, mas deve ser oferecida sem caroço e com moderação devido ao teor de açúcar.",
            imagem: "imagens/manga.jpg",
            tags: "fruta vitaminas açúcar petisco moderado"
        },
        {
            nome: "Morango",
            descricao: "Contém antioxidantes, fibras e vitamina C. Um petisco saudável e seguro, mas devido ao açúcar natural, é melhor dar em pequenas quantidades.",
            imagem: "imagens/morango.jpg",
            tags: "fruta antioxidantes fibras vitamina c petisco"
        },
        {
            nome: "Ovos (cozidos)",
            descricao: "Fonte de proteína de alta qualidade e vitaminas, especialmente benéfico para a saúde da pele e do pelo. Sempre ofereça ovos cozidos.",
            imagem: "imagens/ovos.jpg",
            tags: "proteína pele pelo cozido saudável"
        },
        {
            nome: "Couve",
            descricao: "Rica em vitaminas e minerais, a couve é um superalimento para cães, ajudando a melhorar a digestão e o sistema imunológico.",
            imagem: "imagens/couve.jpg",
            tags: "vegetal vitaminas digestão imunidade"
        },
        {
            nome: "Brócolis (cozido)",
            descricao: "Fonte de fibras e vitaminas, o brócolis cozido é seguro, mas deve ser oferecido com moderação para evitar problemas digestivos.",
            imagem: "imagens/brocolis.jpg",
            tags: "vegetal fibras vitaminas digestão"
        },
        {
            nome: "Abobrinha",
            descricao: "Rica em fibras e vitaminas, é um ótimo complemento para a dieta dos cães e ajuda na digestão.",
            imagem: "imagens/abobrinha.jpg",
            tags: "vegetal fibras vitaminas digestão"
        },
        {
            nome: "Arroz",
            descricao: "Fácil de digerir e ótimo para cães com problemas digestivos. O arroz integral também oferece mais fibras.",
            imagem: "imagens/arroz.jpg",
            tags: "grão digestão fibras leve"
        },
        {
            nome: "Cenoura",
            descricao: "Rica em fibras e vitaminas, as cenouras são saudáveis para a visão e digestão dos cães. Também ajudam a manter os dentes limpos.",
            imagem: "imagens/cenoura.jpg",
            tags: "vegetal fibras vitaminas visão dentes"
        },
        {
            nome: "Maçã",
            descricao: "Fonte de vitaminas A e C, além de fibras, a maçã é um lanche nutritivo. Apenas evite as sementes, que contêm cianeto em pequenas quantidades.",
            imagem: "imagens/maca.jpg",
            tags: "fruta vitaminas fibras lanche"
        },
        {
            nome: "Salmão cozido",
            descricao: "Rico em ácidos graxos ômega-3, que são benéficos para a pele e pelagem dos cães, além de ajudar no sistema imunológico.",
            imagem: "imagens/salmao.jpg",
            tags: "peixe ômega-3 pele pelagem imunidade"
        },
        {
            nome: "Batata Doce",
            descricao: "Boa fonte de fibras, vitaminas e minerais. Deve ser oferecida cozida e sem temperos.",
            imagem: "imagens/batata-doce.jpg",
            tags: "tubérculo fibras vitaminas cozido"
        },
        {
            nome: "Pipoca (sem sal e sem manteiga)",
            descricao: "Pode ser dada em pequenas quantidades como um petisco, desde que não contenha sal ou manteiga.",
            imagem: "imagens/pipoca.jpg",
            tags: "petisco sem sal leve moderação"
        },
        {
            nome: "Peras (sem sementes)",
            descricao: "Ricas em fibras e vitamina C. Devem ser oferecidas sem sementes.",
            imagem: "imagens/pera.jpg",
            tags: "fruta fibras vitamina c lanche"
        },
        {
            nome: "Banana",
            descricao: "Fonte de potássio e vitaminas. Ofereça em pequenas quantidades devido ao alto teor de açúcar.",
            imagem: "imagens/banana.jpg",
            tags: "fruta potássio vitaminas açúcar"
        },
        {
            nome: "Queijo (em pequenas quantidades)",
            descricao: "Pode ser oferecido em pequenas quantidades. Optar por queijos com baixo teor de gordura e sem temperos.",
            imagem: "imagens/queijo.jpg",
            tags: "laticínio proteína gordura moderado"
        },
        {
            nome: "Abóbora",
            descricao: "Boa para a digestão e rica em fibras. Deve ser oferecida cozida e sem temperos.",
            imagem: "imagens/abobora.jpg",
            tags: "vegetal fibras digestão cozido"
        },
        {
            nome: "Beterraba",
            descricao: "Rica em fibras e antioxidantes. Pode ser oferecida cozida em pequenas quantidades.",
            imagem: "imagens/beterraba.jpg",
            tags: "vegetal fibras antioxidantes cozido"
        }
    ],
    moderacao: [
        {
            nome: "Mel",
            descricao: "Seguro em pequenas quantidades. Rico em antioxidantes e vitaminas, mas deve ser dado com moderação devido ao alto teor de açúcar.",
            imagem: "imagens/mel.jpg",
            tags: "doce antioxidantes vitaminas açúcar"
        },
        {
            nome: "Batata (cozida, sem tempero)",
            descricao: "Pode ser oferecida ocasionalmente, mas sem temperos ou óleo. Batatas cruas contêm solanina, que é tóxica para cães.",
            imagem: "imagens/batata.jpg",
            tags: "tubérculo solanina cozido sem tempero"
        },
        {
            nome: "Aveia (cozida)",
            descricao: "Rica em fibras e uma boa opção para cães com sensibilidades alimentares. Deve ser oferecida sem adição de açúcar ou adoçantes.",
            imagem: "imagens/aveia.jpg",
            tags: "grão fibras sensibilidade digestão"
        },
        {
            nome: "Coco (sem casca)",
            descricao: "Rico em antioxidantes e ácidos graxos benéficos, o coco pode ser dado ocasionalmente. O óleo de coco também é seguro em pequenas quantidades, mas deve ser dado com moderação devido ao alto teor de gordura.",
            imagem: "imagens/coco.jpg",
            tags: "fruta antioxidantes gordura óleo de coco"
        },
        {
            nome: "Camarão (cozido e sem casca)",
            descricao: "Fonte de proteínas e ácidos graxos ômega-3. No entanto, deve ser dado em pequenas quantidades devido ao colesterol presente.",
            imagem: "imagens/camarao.jpg",
            tags: "marisco proteína ômega-3 colesterol"
        },
        {
            nome: "Pão (integral e sem temperos)",
            descricao: "Seguro em pequenas quantidades, mas evite pães com temperos, alho ou cebola. Pães integrais são uma escolha mais saudável.",
            imagem: "imagens/pao.jpg",
            tags: "carboidrato integral sem tempero moderação"
        },
        {
            nome: "Iogurte Natural",
            descricao: "Pode ser uma boa fonte de cálcio e proteínas, mas deve ser oferecido sem adição de açúcares ou adoçantes.",
            imagem: "imagens/iogurte.jpg",
            tags: "laticínio cálcio proteínas sem açúcar"
        },
        {
            nome: "Damasco",
            descricao: "Pode ser oferecido em pequenas quantidades. Remover a semente, pois pode ser tóxica.",
            imagem: "imagens/damasco.jpg",
            tags: "fruta moderação semente tóxica"
        },
        {
            nome: "Leite",
            descricao: "Pode ser oferecido em pequenas quantidades, mas muitos cães têm intolerância à lactose, o que pode causar problemas digestivos.",
            imagem: "imagens/leite.jpg",
            tags: "laticínio lactose intolerância digestão"
        }
    ],
    proibidos: [
        {
            nome: "Massas Fermentadas Cruas",
            descricao: "A fermentação pode causar gases e distensão estomacal, além do risco de intoxicação alcoólica devido à fermentação dos açúcares.",
            imagem: "imagens/massas-fermentadas.jpg",
            tags: "massa fermentada gases intoxicação alcoólica"
        },
        {
            nome: "Carambola",
            descricao: "Tóxica para cães, pois pode causar insuficiência renal e problemas digestivos graves.",
            imagem: "imagens/carambola.jpg",
            tags: "fruta tóxica insuficiência renal digestivo"
        },
        {
            nome: "Carne de Porco Crua",
            descricao: "Pode conter parasitas e causar doenças como a triquinose. Sempre cozinhe a carne de porco completamente antes de oferecer.",
            imagem: "imagens/carne-porco-crua.jpg",
            tags: "carne crua parasitas triquinose"
        },
        {
            nome: "Frutas com Caroço (ex: Pêssego, Ameixa, Cereja)",
            descricao: "O caroço dessas frutas pode causar bloqueios intestinais, e alguns caroços contêm cianeto, que é tóxico para cães.",
            imagem: "imagens/frutas-caroco.jpg",
            tags: "fruta caroço cianeto bloqueio intestinal"
        },
        {
            nome: "Doces e Balas (com Xilitol)",
            descricao: "O xilitol, um adoçante comum, é extremamente tóxico para cães, podendo causar uma queda rápida nos níveis de açúcar no sangue, convulsões e até a morte.",
            imagem: "imagens/doces-xilitol.jpg",
            tags: "doce xilitol tóxico açúcar convulsões"
        },
        {
            nome: "Tomate Verde e Folhas de Tomate",
            descricao: "Contêm solanina, que é tóxica para cães. Apenas tomates maduros são seguros em pequenas quantidades, mas deve-se evitar o consumo das folhas.",
            imagem: "imagens/tomate-verde.jpg",
            tags: "vegetal solanina tóxico folhas"
        },
        {
            nome: "Ruibarbo",
            descricao: "Altamente tóxico, o ruibarbo pode causar danos aos rins e outros problemas graves.",
            imagem: "imagens/ruibarbo.jpg",
            tags: "vegetal tóxico rins problemas graves"
        },
        {
            nome: "Cebola e Alho",
            descricao: "Contêm compostos que podem causar toxicidade e danos aos glóbulos vermelhos, levando à anemia.",
            imagem: "imagens/cebola-alho.jpg",
            tags: "vegetal toxicidade anemia glóbulos vermelhos"
        },
        {
            nome: "Uvas e Passas",
            descricao: "Podem causar insuficiência renal aguda em cães, mesmo em pequenas quantidades.",
            imagem: "imagens/uvas.jpg",
            tags: "fruta insuficiência renal tóxico"
        },
        {
            nome: "Café e Chá",
            descricao: "Contêm cafeína, que pode ser tóxica para cães, causando inquietação, tremores e até problemas cardíacos.",
            imagem: "imagens/cafe-cha.jpg",
            tags: "bebida cafeína tóxico inquietação problemas cardíacos"
        },
        {
            nome: "Nogueiras e Nozes",
            descricao: "Podem causar obstrução intestinal e têm alto teor de gordura, o que pode levar a pancreatite.",
            imagem: "imagens/nogueiras.jpg",
            tags: "nozes obstrução intestinal gordura pancreatite"
        },
        {
            nome: "Chocolate",
            descricao: "Altamente tóxico para cães, o chocolate contém teobromina, que pode causar vômitos, diarreia, tremores, convulsões e até a morte, dependendo da quantidade ingerida.",
            imagem: "imagens/chocolate.jpg",
            tags: "chocolate teobromina tóxico vômitos diarreia convulsões"
        }
    ]
};
