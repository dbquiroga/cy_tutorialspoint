class IframesPage {
  get = {
    exampleFrame: () => cy.get(".prettyprint"),
    navBtnAbout: () => cy.get(".nav-item").next(),
  };
}

export const iframesPage = new IframesPage();
