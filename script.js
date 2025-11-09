const tituloProduto = document.querySelector("#titulo-produto");
const nomeCorSelecionada = document.querySelector("#nome-cor-selecionada");
const imagemVisualizacao = document.querySelector("#imagem-visualizacao");
const miniaturasImagens = Array.from(
  document.querySelectorAll("#selecionar-imagem label > img")
);

const opcoesTamanho = ["41 mm", "45 mm"];
const opcoesCores = [
  "verde-cipreste",
  "azul-inverno",
  "meia-noite",
  "estelar",
  "rosa-claro",
];

const estado = {
  cor: obterIndiceSelecionado('[name="opcao-cor"]:checked', 0),
  tamanho: obterIndiceSelecionado('[name="opcao-tamanho"]:checked', 0),
  imagem: obterIndiceSelecionado('[name="opcao-imagem"]:checked', 0),
};

function extrairIndice(id) {
  if (!id) {
    return null;
  }

  const [parteNumerica] = id.split("-");
  const indice = Number.parseInt(parteNumerica, 10);

  return Number.isNaN(indice) ? null : indice;
}

function obterIndiceSelecionado(seletor, fallback = 0) {
  const inputSelecionado = document.querySelector(seletor);
  const indice = extrairIndice(inputSelecionado?.id);

  return indice ?? fallback;
}

function ajustarIndiceImagem(indice) {
  if (!miniaturasImagens.length) {
    return indice;
  }

  return Math.max(0, Math.min(indice, miniaturasImagens.length - 1));
}

function obterNomeCorAtual() {
  return opcoesCores[estado.cor] ?? null;
}

function atualizarTituloProduto() {
  const nomeCor = obterNomeCorAtual();
  const tamanhoCaixa = opcoesTamanho[estado.tamanho];

  if (!tituloProduto || !nomeCor || !tamanhoCaixa) {
    return;
  }

  tituloProduto.innerText = `Pulseira loop esportiva ${nomeCor.toLowerCase()} para caixa de ${tamanhoCaixa}`;
}

function atualizarImagemPrincipal(nomeCor, indiceImagem = estado.imagem) {
  if (!imagemVisualizacao || !nomeCor) {
    return;
  }

  const indiceValido = ajustarIndiceImagem(indiceImagem);
  estado.imagem = indiceValido;

  const caminhoBase = `./imagens/opcoes-cores/imagens-${nomeCor.toLowerCase()}`;
  imagemVisualizacao.src = `${caminhoBase}/imagem-${indiceValido}.jpeg`;
}

function atualizarMiniaturas(nomeCor) {
  if (!miniaturasImagens.length || !nomeCor) {
    return;
  }

  const caminhoBase = `./imagens/opcoes-cores/imagens-${nomeCor.toLowerCase()}`;
  miniaturasImagens.forEach((miniatura, index) => {
    if (miniatura) {
      miniatura.src = `${caminhoBase}/imagem-${index}.jpeg`;
    }
  });
}

function atualizarCorSelecionada() {
  const inputSelecionado = document.querySelector('[name="opcao-cor"]:checked');
  const indiceSelecionado = extrairIndice(inputSelecionado?.id);

  if (indiceSelecionado === null || !opcoesCores[indiceSelecionado]) {
    console.warn("Nenhuma cor válida selecionada.");
    return;
  }

  estado.cor = indiceSelecionado;
  const nomeCor = opcoesCores[indiceSelecionado];

  if (nomeCorSelecionada) {
    nomeCorSelecionada.innerText = `Cor - ${nomeCor}`;
  }

  atualizarTituloProduto();
  atualizarMiniaturas(nomeCor);
  atualizarImagemPrincipal(nomeCor, estado.imagem);
}

function atualizarTamanho() {
  const inputSelecionado = document.querySelector('[name="opcao-tamanho"]:checked');
  const indiceSelecionado = extrairIndice(inputSelecionado?.id);

  if (indiceSelecionado === null || !opcoesTamanho[indiceSelecionado]) {
    console.warn("Nenhum tamanho válido selecionado.");
    return;
  }

  estado.tamanho = indiceSelecionado;

  atualizarTituloProduto();

  const nomeCorAtual = obterNomeCorAtual();
  if (nomeCorAtual) {
    atualizarImagemPrincipal(nomeCorAtual, estado.imagem);
  }

  if (!imagemVisualizacao) {
    return;
  }

  if (opcoesTamanho[indiceSelecionado] === "41 mm") {
    imagemVisualizacao.classList.add("caixa-pequena");
  } else {
    imagemVisualizacao.classList.remove("caixa-pequena");
  }
}

function atualizarImagemSelecionada() {
  const inputSelecionado = document.querySelector('[name="opcao-imagem"]:checked');
  const indiceSelecionado = extrairIndice(inputSelecionado?.id);

  if (indiceSelecionado === null) {
    return;
  }

  const nomeCorAtual = obterNomeCorAtual();
  if (!nomeCorAtual) {
    return;
  }

  atualizarImagemPrincipal(nomeCorAtual, indiceSelecionado);
}

window.atualizarCorSelecionada = atualizarCorSelecionada;
window.atualizarTamanho = atualizarTamanho;
window.atualizarImagemSelecionada = atualizarImagemSelecionada;

atualizarCorSelecionada();
atualizarTamanho();