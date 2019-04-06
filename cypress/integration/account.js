
describe('login', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should display login form', () => {
  });

  it('should alert about missing information', () => {
    cy.get('[data-cy="email"]').type('clement@champouillon.com{enter}');
    cy.get('.notification-message').should('contain', 'Merci de renseigner tous les champs');
  });
});
