class HomePage {
    visit() {
      cy.visit("/");
    }
  
    searchProduct(productName) {
      cy.get('input[name="mobile_search"]').type(`${productName}{enter}`);
    }
  }
  
  export default new HomePage();