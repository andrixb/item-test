/// <reference types="jest" />
describe('List items', () => {
    it('should show a list of items', () => {
        cy.visit('/items-manager');
        cy.url().should('include', '/items-manager');
        cy.get('*[data-test*="btn-submit-search"]').click()
        cy.get('*[data-test*="items-container"]').first().should('be.visible');
        cy.get('*[data-test*="item-in-list"]').first().should('be.visible');
    });
});
