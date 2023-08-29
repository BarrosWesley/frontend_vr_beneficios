Teste Automatizado com Cypress - Validação do Mapa VR
Este repositório contém um teste automatizado criado utilizando o framework de testes Cypress para validar a funcionalidade de exibição do mapa do Google no site da VR.

Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas antes de executar o teste:

Node.js: Certifique-se de ter o Node.js instalado na sua máquina.
Cypress: Instale o Cypress globalmente ou localmente no seu projeto.
Executando o Teste
Clone este repositório:
bash
Copy code
git clone https://github.com/seu-usuario/nome-do-repositorio.git
Navegue até o diretório do projeto:
bash
Copy code
cd nome-do-repositorio
Instale as dependências:
bash
Copy code
npm install
Execute o Cypress:
bash
Copy code
npx cypress open
No Cypress, clique no arquivo de teste nome-do-arquivo-de-teste.spec.js para executar o teste.
Descrição do Teste
O teste automatizado realiza as seguintes etapas no site da VR:

Acessa o site www.vr.com.br.
Navega até a seção "Pra Você".
Clica no botão "Onde usar meu cartão VR".
Valida que o mapa do Google é exibido na tela.
O teste utiliza seletores baseados em texto e IDs para interagir com os elementos da página.

Personalização do Teste
Caso o site da VR passe por mudanças, os seletores dos elementos podem se tornar inválidos. Nesse caso, é necessário atualizar os seletores no arquivo de teste nome-do-arquivo-de-teste.spec.js.

Considerações Finais
Os testes automatizados são uma parte importante do processo de desenvolvimento para garantir a qualidade das aplicações. Este teste em particular visa garantir que a funcionalidade de exibição do mapa do Google no site da VR esteja funcionando conforme o esperado.
