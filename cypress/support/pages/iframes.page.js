class IframesPage {
  get = {
    exampleFrame: () => cy.get(".prettyprint"),
    navBtnAbout: () => cy.get(".nav-item").eq(14),
  };
}

export const iframesPage = new IframesPage();
