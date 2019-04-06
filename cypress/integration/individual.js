
describe('onboard', () => {
  it('should go through it', () => {
    cy.visit('/');
    cy.get('[data-cy="create-account"]').click();
    cy.get('[data-cy="individual"]').click();
    cy.get('[data-cy="male"]').click();
    cy.get('[data-cy="firstName"]').type('Clément');
    cy.get('[data-cy="lastName"]').type('Champouillon');
    cy.get('[data-cy="email"]').type('cchampou@gmail.com');
    cy.get('[data-cy="phone"]').type('0698393484');
    cy.get('[data-cy="password"]').type('b8gt5k98c');
    cy.get('[data-cy="confirmation"]').type('b8gt5k98c{enter}');
  });
});
