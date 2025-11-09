# Hashtag Watch

Landing page responsiva inspirada na vitrine do Apple Watch, desenvolvida como exercício das aulas do Hashtag Treinamentos. O projeto demonstra manipulação dinâmica de conteúdo, boas práticas de acessibilidade e adaptação a diferentes tamanhos de tela.

## ✨ Destaques

- **Layout responsivo** com breakpoints para desktop, tablet e mobile.
- **Seleção dinâmica** de cor, tamanho e imagem do relógio via JavaScript.
- **Acessibilidade aprimorada** com `aria-label` nos controles visuais.
- Tipografia San Francisco carregada via `@font-face`, replicando a identidade visual da Apple.

## 🧱 Estrutura do projeto

```
Do Zero/
├── imagens/                 # Ativos visuais utilizados na página
├── index.html               # Estrutura principal da landing page
├── script.js                # Lógica de interação e atualização do conteúdo
├── style.css                # Estilos, layout e media queries
└── README.md                # Documentação do projeto
```

## 🛠️ Tecnologias

- HTML5
- CSS3 (Flexbox, media queries)
- JavaScript (ES2020+)

## ✅ Pré-requisitos

- Navegador moderno (Chrome, Edge, Firefox ou Safari)
- Opcional: servidor estático simples para driblar restrições de CORS ao carregar imagens locais

## ▶️ Como executar

1. Clone ou baixe este repositório.
2. Abra `index.html` diretamente no navegador **ou** sirva o diretório com uma ferramenta simples, por exemplo:

   ```bash
   npx serve .
   ```

3. Explore as combinações ajustando cor, tamanho e miniaturas disponíveis.

## 🌐 Funcionalidades

- Atualização automática do título conforme a cor e o tamanho selecionados.
- Troca da imagem principal e das miniaturas para refletir a cor ativa.
- Ajuste visual do relógio para caixas de 41 mm (`.caixa-pequena`).
- Script carregado com `defer`, garantindo que o DOM esteja pronto antes da execução.

## ♿ Acessibilidade

- Inputs de cor e miniaturas contam com `aria-label` descritivo.
- Estrutura semântica (`nav`, `main`, `section`, `h1`, `h2`) auxilia leitores de tela.

## 🚀 Próximos passos sugeridos

- Implementar menu hambúrguer para navegação em telas muito estreitas.
- Adicionar testes automatizados para validar interações.
- Publicar a página via GitHub Pages ou Vercel.

## 📄 Licença

Projeto acadêmico para fins educacionais. Fique à vontade para usar como referência.
