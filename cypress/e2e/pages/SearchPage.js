class SearchPage {
    clickFirstProduct() {
      cy.get(":nth-child(1) > :nth-child(4) > .productName").click();
    }
  
    goToCart() {
      cy.get(".fixedBtn > .roboto-medium").click();
    }
  }
  
  export default new SearchPage();