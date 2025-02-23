# Insums - Desenvolvimento de Aplicações Front-End com Frameworks e Componentes

Este projeto tem como objetivo apresentar a aplicação desenvolvida durante a disciplina de Desenvolvimento de Aplicações Front-End com Frameworks e Componentes. A ideia central é construir uma plataforma inspirada na Cooperativa Cocamar, com foco na venda de insumos agrícolas para os agricultores. O site foi projetado para ser responsivo e fácil de usar, proporcionando uma ótima experiência de compra online.

### Inspiração e Protótipo

O site foi inspirado pelo design da **Cooperativa Cocamar**, acessível em:  
[www.lojacocamar.com.br](https://www.lojacocamar.com.br/).

O protótipo foi desenvolvido no **Figma** e pode ser acessado através do link abaixo:  
[Protótipo no Figma](https://www.figma.com/design/lZpVjoWAfj2YirWJRsIkOG/loja-insumos-do-campo?node-id=13-1570&p=f&t=u3LEOrgqWdwdBsrA-0).

### Deploy do Site

O site foi hospedado no **GitHub Pages**, e pode ser acessado via o seguinte link:  
[Insums - GitHub Pages](https://guilhermepatr.github.io/insums/main).

---

## Requisitos e Funcionalidades

A seguir estão os requisitos atendidos e as funcionalidades implementadas no projeto:

### RA1 - Prototipar e projetar interfaces gráficas de usuário, considerando princípios de usabilidade e experiência do usuário.
- [X] ID1: O aluno desenvolveu protótipos de interfaces que demonstram compreensão das diretrizes de usabilidade.
- [X] ID2: O aluno projetou interfaces responsivas que se adaptam a diferentes tamanhos de tela.
### RA2 - Criar e reutilizar componentes em frameworks frontend, desenvolvendo interfaces modulares, responsivas e estilizadas.
- [X] ID3: O aluno desenvolveu componentes reutilizáveis que são aplicáveis em diferentes contextos da aplicação, garantindo que se adaptem de maneira responsiva em vários tamanhos de tela.
- [X] ID4: O aluno incorporou componentes de frameworks CSS para aprimorar a aparência e funcionalidade da aplicação de maneira consistente.
- [X] ID5: O aluno aplicou diretivas estruturais para renderizar elementos de forma condicional, permitindo a exibição ou ocultação de conteúdo com base em condições dinâmicas.
- [X] ID6: O aluno utilizou diretivas estruturais para repetir elementos de interface de maneira dinâmica, a fim de criar listas, galerias ou outras visualizações baseadas em conjuntos de dados.
- [X] ID7: O aluno aplicou Pipes de maneira eficaz para formatar a apresentação de dados, garantindo que as informações exibidas sejam legíveis, esteticamente agradáveis e atendam aos requisitos de apresentação específicos para cada contexto.
### RA3 - Sincronizar dados entre a interface gráfica e o modelo de dados, aplicando técnicas de binding para manter a consistência.
- [X] ID8: O aluno demonstrou a compreensão e a aplicação de técnicas de one-way data binding, como Interpolation e Property Binding, para exibir e atualizar dados na interface gráfica de maneira unidirecional.
- [X] ID9: O aluno demonstrou a aplicação de técnicas de event binding para capturar eventos do usuário na interface e interagir com o modelo de dados, mantendo a consistência e a sincronização entre os dois.
- [X] ID10: O aluno implementou a técnica de two-way data binding para criar uma sincronização bidirecional automática entre a interface e o modelo de dados, permitindo uma atualização eficiente dos dados em ambos os lados.
- [X] ID11: O aluno fez uso eficaz de variáveis de template para manipulação dinâmica dos dados na interface gráfica, demonstrando a capacidade de exibir informações de maneira flexível e adaptável.
### RA4 - Implementar comunicação eficaz entre componentes, utilizando padrões de comunicação e serviços para compartilhar lógica e dados.
- [X] ID12: O aluno criou comunicação entre componentes não relacionados hierarquivamente por meio de serviços através do mecanismo de injeção de dependência, compartilhando lógica ou informações.
- [X] ID13: O aluno utilizou efetivamente as diretivas @Input e @Output para estabelecer uma comunicanção em uma hierarquia de componentes, passando e recebendo dados entre componentes de maneira segura e consistente.
### RA5 - Criar interfaces de navegação intuitivas e responsivas, implementando roteamento em aplicações de página única (SPA).
- [X] ID14: O aluno configurou rotas para diferentes partes da aplicação, permitindo a navegação entre páginas distintas.
- [ ] ID15: O aluno demonstrou a habilidade de passar dados entre componentes que representam diferentes telas usando parâmetros de rotas, garantindo uma troca eficiente de informações.
- [X] ID16: O aluno criou uma estrutura de navegação aninhada para representar hierarquias de conteúdo.
- [ ] ID17: O aluno aplicou guardas de rotas para controlar o acesso a rotas específicas da aplicação, assegurando que somente usuários autorizados possam acessar determinadas partes da interface.
### RA6 - Realizar requisições assíncronas para serviços web, compreendendo os protocolos e formatos de troca de dados, tratando respostas e erros.
- [X] ID18: O aluno fez requisições assíncronas a uma API pública, compreendendo os protocolos HTTP e formatos de dados para no mínimo a operação GET.
- [X] ID19: O aluno fez requisições assíncronas a uma API simulada/fake, compreendendo os protocolos HTTP e formatos de dados para as operações GET, POST, PUT, PATCH e DELETE.
- [X] ID20: O aluno tratou respostas de sucesso e erros das requisições assíncronas de forma apropriada.
- [X] ID21: O aluno aplicou validações de entrada nos campos do formulário, utilizando técnicas como expressões regulares (REGEX), e apresentou mensagens de erro claras e informativas para auxiliar os usuários a corrigir entradas incorretas.
- [X] ID22: O aluno desabilitou adequadamente o botão de submit enquanto o formulário continha campos inválidos, promovendo uma experiência de usuário mais intuitiva e evitando a submissão de dados incorretos.
- [x] ID23: O aluno demonstrou a capacidade de utilizar Promises para tratar respostas assíncronas.
- [X] ID24: O aluno demonstrou a capacidade de utilizar Observables para tratar respostas assíncronas.
### RA7 - Gerenciar o código-fonte de maneira eficiente, implementar boas práticas de controle de versão e colaborar em projetos de desenvolvimento.
- [X] ID25: O aluno criou um repositório no GitHub utilizando a estrutura do Gitflow, estabelecendo as branches "main" e "develop", demonstrando proficiência em boas práticas de controle de versão e organização do projeto.
- [X] ID26: O aluno colaborou de maneira efetiva com outros membros do projeto, realizando fusões (merges) e resolução de conflitos de código de forma adequada e alinhada às práticas de desenvolvimento colaborativo.
- [X] ID27: O aluno planejou, configurou e executou o processo de build da aplicação, preparando-a para produção e realizou o deploy em um ambiente de hospedagem, tornando-a prontamente acessível para uso.


## Como Rodar o Projeto

### 1. **Rodando o Projeto Localmente**

1. Clone o repositório:
   ```bash
   git clone https://github.com/guilhermepatr/insums.git
   cd insums
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Rode a aplicação:
   ```bash
   ng serve
   ```

A aplicação estará disponível em `http://localhost:4200`.

### 2. **Deploy no GitHub Pages**

Para realizar o deploy da aplicação no **GitHub Pages**, siga os seguintes passos:

1. Construa a aplicação em produção:
   ```bash
   ng build --configuration production --base-href /insums/
   ```

2. Utilize o Angular CLI para realizar o deploy:
   ```bash
   npx angular-cli-ghpages --dir=dist/insums/browser
   ```

O site estará disponível no GitHub Pages após o deploy.

### 3. **Rodando como PWA (Progressive Web App)**

Para rodar a aplicação como um PWA, execute os seguintes comandos:

1. Instale o PWA:
   ```bash
   npm uninstall @angular/pwa
   ng add @angular/pwa
   ```

2. Construa a aplicação em produção:
   ```bash
   ng build --configuration=production
   ```

3. Navegue até a pasta do build:
   ```bash
   cd dist/insums/browser
   ```

4. Utilize o `http-server` para rodar a aplicação:
   ```bash
   npx http-server -o
   ```

---

## Tecnologias Utilizadas

- **Angular**: Framework principal utilizado para desenvolvimento da aplicação.
- **Bootstrap**: Framework de estilização utilizado para a aplicação.
- **Figma**: Ferramenta utilizada para criação do protótipo visual.
- **GitHub Pages**: Plataforma de hospedagem para o deploy do site.
- **PWA**: Implementação de Progressive Web App para tornar a aplicação acessível offline.

---

## Considerações Finais

Este projeto foi desenvolvido como parte do curso de **Desenvolvimento Web 2**, com foco na criação de uma aplicação moderna e responsiva, utilizando as melhores práticas de usabilidade, design e desenvolvimento web. Através dele, foram aplicados diversos conceitos de Angular, desde a criação de componentes reutilizáveis até a integração com APIs e implementação de requisições assíncronas.

---

## Links Úteis

- **Repositório no GitHub**: [https://github.com/guilhermepatr/insums](https://github.com/guilhermepatr/insums)
- **Aplicação em Produção**: [https://guilhermepatr.github.io/insums/main](https://guilhermepatr.github.io/insums/main)
- **Protótipo no Figma**: [https://www.figma.com/design/lZpVjoWAfj2YirWJRsIkOG/loja-insumos-do-campo?node-id=13-1570&p=f&t=u3LEOrgqWdwdBsrA-0](https://www.figma.com/design/lZpVjoWAfj2YirWJRsIkOG/loja-insumos-do-campo?node-id=13-1570&p=f&t=u3LEOrgqWdwdBsrA-0)
- **Apresetação do projeto**: [https://youtu.be/x65e-oHIIXY](https://youtu.be/x65e-oHIIXY)
