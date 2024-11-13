
# Projeto shopautomation

## Pré-requisitos

Antes de executar o projeto, certifique-se de que você tem o [Node.js](https://nodejs.org/) e [Yarn](https://classic.yarnpkg.com/en/docs/install) instalados.

### 1. Verificar e Instalar Node.js

Para verificar se o Node.js está instalado, use o comando:

```sh
node -v # Para verificar a versão do npm: 
```

Se o Node.js ou npm não estiver instalado, baixe e instale o Node.js, que inclui o npm.

Para instalar Node.js:

Windows/Mac: Baixe o instalador apropriado do site oficial do Node.js e siga as instruções de instalação.

Linux: Utilize um gerenciador de pacotes como nvm (Node Version Manager):

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
source ~/.bashrc
nvm install node
```
### 2. Verificar e Instalar Yarn (Opcional)
Para verificar se o Yarn está instalado, use o comando:

```sh
yarn -v # Se o Yarn não estiver instalado, você pode instalá-lo globalmente via npm:

npm install -g yarn #Para mais detalhes sobre a instalação do Yarn, visite a documentação oficial.
```
### 3. Clonar o Projeto

Clone o repositório do projeto usando o comando:

```sh
git clone https://github.com/JuarezSantos/ShopAutomation.git
cd shopautomation
````

### 4. Instalar Dependências
Instale as dependências do projeto usando Yarn:

```sh
yarn install
```
### 5. Executar Testes
Para executar os testes com Cypress em modo headless, use:

```sh
yarn test #Isso executará os testes em modo headless, ou seja, sem abrir um navegador.
```
### 6. Visualizar Execução no Navegador
Para visualizar a execução dos testes no navegador, use:

```sh
yarn cypress:open # 
Isso abrirá o Cypress Test Runner no navegador padrão, permitindo que você veja a execução dos testes em tempo real.
```
### Reexecutar o GitHub Actions
Se você precisar reexecutar um workflow do GitHub Actions, siga estes passos:
 - Vá para a aba "Actions" do seu repositório no GitHub:
 - Navegue até a aba "Actions" no seu repositório para ver a lista de workflows executados.
 - Encontre o Workflow Desejado:
    Localize o workflow que você deseja reexecutar. Pode ser um workflow          específico associado a um commit ou a uma Pull Request.
- Reexecute o Workflow:
    Clique no workflow desejado para abrir a página de detalhes.
    Clique no botão "Re-run jobs" (ou "Re-run all jobs") no canto superior direito.

Isso fará com que o GitHub Actions reexecute o workflow.
