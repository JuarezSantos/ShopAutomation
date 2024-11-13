class CartPage {
    openCart() {
      cy.get("#shoppingCartLink").click();
    }
  
    proceedToCheckout() {
      cy.get("#checkOutButton").click();
    }
  }
  
  export default new CartPage();