class LoginPage {
  login(username, password) {
    cy.get('input[name="usernameInOrderPayment"]').type(username);
    cy.get('input[name="passwordInOrderPayment"]').type(password);
    cy.get("#login_btn").click();
  }
  isLoginErrorVisible() {
    // Verifica a existência do elemento antes de aplicar validações
    return cy.get("body").then(($body) => {
      if ($body.find("label.ng-binding.invalid").length > 0) {
        return true; // O erro de login está visível
      }
      return false; // O erro de login não está presente
    });
  }
}

export default new LoginPage();