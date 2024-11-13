class CheckoutPage {
    proceedToPayment() {
      cy.get("#next_btn").click();
    }
  
    payWithSafePay(username, password) {
      cy.get('input[name="safepay_username"]').clear().type(username);
      cy.get('input[name="safepay_password"]').clear().type(password);
      cy.get("#pay_now_btn_SAFEPAY").click();
    }
  
    validateThankYouMessage() {
      cy.contains("Thank you for buying with Advantage").should("be.visible");
    }
  }
  
  export default new CheckoutPage();