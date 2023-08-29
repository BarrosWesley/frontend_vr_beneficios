# Teste Automatizado com Cypress - Validação do Mapa VR

Este repositório contém um teste automatizado criado utilizando o framework de testes Cypress para validar a funcionalidade de exibição do mapa do Google no site da VR.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas antes de executar o teste:

- [Node.js](https://nodejs.org/): Certifique-se de ter o Node.js instalado na sua máquina.
- [Cypress](https://www.cypress.io/): Instale o Cypress globalmente ou localmente no seu projeto.

## Executando o Teste

1. Clone este repositório:

```bash
git clone https://github.com/BarrosWesley/frontend_vr_beneficios.git

2. Navegue até o diretório do projeto
cd nome-do-repositorio

3. Instale as dependências:
npm install

4. Execute o Cypress:
npx cypress open

5. No Cypress, clique no arquivo de teste nome-do-arquivo-de-teste.spec.js para executar o teste

## Descrição do Teste

O teste automatizado realiza as seguintes etapas no site da VR:

1.Acessa o site www.vr.com.br.
2.Navega até a seção "Pra Você".
3.Clica no botão "Onde usar meu cartão VR".
4.Valida que o mapa do Google é exibido na tela.

O teste utiliza seletores baseados em texto e IDs para interagir com os elementos da página.

## Personalização do Teste

Caso o site da VR passe por mudanças, os seletores dos elementos podem se tornar inválidos. Nesse caso, é necessário atualizar os seletores no arquivo de teste nome-do-arquivo-de-teste.spec.js.

## Considerações Finais

Os testes automatizados são uma parte importante do processo de desenvolvimento para garantir a qualidade das aplicações. Este teste em particular visa garantir que a funcionalidade de exibição do mapa do Google no site da VR esteja funcionando conforme o esperado.



