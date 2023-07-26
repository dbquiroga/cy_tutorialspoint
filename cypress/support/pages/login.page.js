class Login {
    get = {
        nameInput: () => cy.get("#textRegName"),
        phoneInput: () => cy.get("#phone"),
        countryphoneInput: () => cy.get("#country_code"),
        emailInput: () => cy.get("#textSRegEmail"),
        passInput: () => cy.get("#user_password"),
        verifyEmailBtn: () => cy.get("#validate_email_id"),
        verifyEmailInput: () => cy.get("#txtEmailValidateOTP"),
    };

    setRandomCountry() {
        this.get.countryphoneInput().select(Cypress._.random(0, 7));
        cy.wait(1000);
    }

getEmailCode(email) {
  return cy
    .request({
      method: "POST",
      url: "https://www.tutorialspoint.com/market/sendEmailOTP.php",
      body: {
        email: email,
      },
    })
    .then((response) => {
      const verificationCode = response.body.verificationCode;
      cy.log("Código de verificación:", verificationCode);
      return verificationCode;
    })
    .catch((error) => {
      cy.log("Error al obtener el código de verificación:", error);
      return null;
    });
}

    
// Función para obtener y decodificar el valor de la cookie XSRF-TOKEN
  getAndDecodeXSRFToken() {
    cy.getCookie('XSRF-TOKEN').then((cookie) => {
      if (cookie && cookie.value) {
        const decodedValue = decodeURIComponent(cookie.value);
        console.log("Decoded XSRF-TOKEN value:", decodedValue);
        // Aquí puedes realizar alguna manipulación adicional con el valor de la cookie si es necesario
        // Por ejemplo, puedes almacenar el valor en una variable de la clase o en el contexto de Cypress
      } else {
        console.log("Cookie 'XSRF-TOKEN' not found or empty.");
      }
    });
  }
}
    
    
    
}

export const loginPage = new Login();
