const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 20000, // Tempo máximo para comandos
  pageLoadTimeout: 60000, // Tempo máximo para carregamento da página
  chromeWebSecurity: false, // Desativa a segurança do Chrome para permitir acesso a domínios cruzados

  e2e: {
    baseUrl: 'https://www.advantageonlineshopping.com/#/', // URL base para os testes
    specPattern: ["**/*.cy.js"], // Padrão para os arquivos de teste
    supportFile: false, // Desativa o arquivo de suporte
  },
})

