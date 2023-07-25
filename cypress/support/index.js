Cypress.on("window:before:load", (win) => {
  // Remover barra diagonal al final de la URL
  const originalLocation = win.location;
  Object.defineProperty(win, "location", {
    get: () => originalLocation,
    set: (loc) => {
      if (typeof loc === "string" && loc.endsWith("/")) {
        loc = loc.slice(0, -1);
      }
      originalLocation.href = loc;
    },
  });
});
