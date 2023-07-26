class AboutusPage {
  get = {
    //links: () => cy.get("a"),
    //btns: () => cy.get("[class='btn']"),
  };

  getLinkElements(element) {
    cy.get(element).each(($link) => {
      const url = $link.attr("href");
      cy.log("URL:", url);
    });
  }

  getBtnsElements(element) {
    cy.get(element).each(($button) => {
      const buttonText = $button.text();
      cy.log("Button Text", buttonText);
    });
  }

  getTextInputElements(element) {
    cy.get(element).then(($textInputs) => {
      $textInputs.each((index, $textInput) => {
        const inputValue = $textInput.value;
        cy.log(`Input ${index + 1} Value:`, inputValue);
      });
    });
  }
}

export const aboutusPage = new AboutusPage();
