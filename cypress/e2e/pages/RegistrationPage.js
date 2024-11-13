class RegistrationPage {
    register(user) {
        cy.get('input[name="usernameRegisterPage"]').type(user.username);
        cy.get('input[name="emailRegisterPage"]').type(user.email);
        cy.get('input[name="passwordRegisterPage"]').type(user.password);
        cy.get('[a-hint="Confirm password"]').type(user.password);
        cy.get('input[name="first_nameRegisterPage"]').type(user.firstName);
        cy.get('input[name="last_nameRegisterPage"]').type(user.lastName);
        cy.get('input[name="postal_codeRegisterPage"]').type(user.postalCode);

        cy.get(
            '[sec-name="registrationAgreement"] > .inputContainer > .ng-pristine'
        ).click();
        cy.get("#register_btn").click();
    }
}

export default new RegistrationPage();

