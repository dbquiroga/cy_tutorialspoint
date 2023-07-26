class Login {
  get = {
    nameInput: () => cy.get("#textRegName"),
    phoneInput: () => cy.get("#phone"),
    countryphoneInput: () => cy.get("#country_code"),
    emailInput: () => cy.get("#textSRegEmail"),
    passInput: () => cy.get("#user_password"),
  };

  setRandomCountry() {
    this.get
      .countryphoneInput()
      .click()
      .find("option")
      .then((options) => {
        const randomIndex = Cypress._.random(0, options.length - 1);
        const randomOption = options[randomIndex];
        const randomValue = randomOption.value;
        const randomText = randomOption.text;

        // Intentar hacer clic en la opción aleatoria con { force: true }
        cy.wrap(randomOption).click({ force: true });

        // Agregar una pausa de 1 segundo antes de hacer la aserción
        cy.wait(1000);

        // Comprobar si el valor se actualizó en el elemento select
        cy.get("#country_code").should("have.value", randomValue);

        cy.log(`Selected random country: ${randomValue} (${randomText})`);
      });
  }
}

export const loginPage = new Login();
