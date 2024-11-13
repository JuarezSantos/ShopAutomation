import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import CheckoutPage from "./pages/CheckoutPage";


describe("Teste de Busca, Adição ao Carrinho e Checkout", () => {
  const user = {
    username: "juarez",
    email: "juarez@dominio.com",
    password: "Senha123",
    firstName: "Juarez",
    lastName: "JUJU",
    phone: "1234567890",
    country: "Brazil",
    city: "Curitiba",
    address: "Rua Exemplo, 123",
    state: "Paraná",
    postalCode: "80000-000",
  };

  it("Deve realizar a busca de um produto e finalizar o checkout", () => {
    // Visita a página inicial e busca um produto
    HomePage.visit();
    HomePage.searchProduct("headset");

    // Seleciona o primeiro produto e adiciona ao carrinho
    SearchPage.clickFirstProduct();
    SearchPage.goToCart();

    // Acessa o carrinho e inicia o checkout
    CartPage.openCart();
    CartPage.proceedToCheckout();

    // Faz login ou registro, se necessário
    LoginPage.login(user.username, user.password);

    LoginPage.isLoginErrorVisible().then((errorVisible) => {
      if (errorVisible) {
        // Se o login falhar, realiza o registro
        cy.get("#registration_btn").click();
        RegistrationPage.register(user);
      }
      
      // Continua para o pagamento e finaliza a compra
      CheckoutPage.proceedToPayment();
      CheckoutPage.payWithSafePay(user.username, user.password);
      CheckoutPage.validateThankYouMessage();
    });
  });
});