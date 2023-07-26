class SignUp {
  get = {
    nameInput: () => cy.get("#textRegName"),
    phoneInput: () => cy.get("#phone"),
    countryphoneInput: () => cy.get("#country_code"),
    emailInput: () => cy.get("#textSRegEmail"),
    passInput: () => cy.get("#user_password"),
    verifyEmailBtn: () => cy.get("#validate_email_id"),
    verifyEmailInput: () => cy.get("#txtEmailValidateOTP"),
    verifyOTPEmailBtn: () => cy.get("#validateEmailOtp"),
    signupBtn: () => cy.get("#signUpNew"),
  };

  setRandomCountry() {
    this.get.countryphoneInput().select(Cypress._.random(0, 7));
    cy.wait(1000);
  }

  requestalone(email) {
    return new Cypress.Promise((resolve, reject) => {
      cy.request({
        method: "POST",
        url: "https://www.tutorialspoint.com/market/sendEmailOTP.php",
        body: {
          email_id: email,
          type: "signup",
          userType: "U",
        },
        headers: {
          authority: "www.tutorialspoint.com",
          "cache-control": "no-cache, no-store, must-revalidate",
          pragma: "no-cache",
          expires: "0",
          "x-requested-with": "XMLHttpRequest",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "x-csrf-token": "yPS3pZJJGNmKTHOwvO87YhrCTSsuGV5V7QTWqK5K",
          accept: "application/json, text/javascript, */*; q=0.01",
        },
      }).then((response) => {
        console.log("Respuesta del request alone:--.-.-.-.-.-.--.", response);

        expect(response.status).to.eq(203); // Verificar si el estado de la respuesta es 200 (éxito)

        const xsrfToken = response.headers["set-cookie"][0].split(";")[0];
        const decodedValue = decodeURIComponent(xsrfToken.split("=")[1]);
        cy.log("Decoded XSRF-TOKEN value:", decodedValue);

        // Decodificar el JSON
        const decodedToken = JSON.parse(atob(decodedValue));

        // Obtener los primeros 6 caracteres del token
        const token = decodedToken.value.slice(0, 6);
        cy.log("Token de 6 caracteres:", token);

        // // Filtrar solo letras mayúsculas y números usando una expresión regular
        // token = token.match(/[A-Z0-9]+/g).join("");
        // cy.log("Token OTP de 6 caracteres (mayúsculas y números):", token);

        resolve(token);
      });
    });
  }
}

export const signupPage = new SignUp();
