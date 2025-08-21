describe("Home", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should get welcome title", () => {
    cy.get('[data-cy="input-email"]').should("be.visible");
  });

  it("should go task screen when click button visualizar tarefas", () => {
    cy.get('[data-cy="button-redirect"]').click();
    cy.url().should('include', '/tasks');
  });
});
