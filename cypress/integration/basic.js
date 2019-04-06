
describe('landing pages', () => {

  it('should load home page', () => {
    cy.visit('/');
  });

  it('should load company pages', () => {
    cy.visit('/company/presentation');
    cy.visit('/company/more');
  });

  it('should load individual pages', () => {
    cy.visit('/individual/presentation');
    cy.visit('/individual/more');
  });
});
