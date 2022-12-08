/// <reference types="jest" />
describe('Favorites list', () => {
    beforeEach(() => {
        cy.visit('/items-manager');
        cy.url().should('include', '/items-manager');
        cy.get('*[data-test*="btn-submit-search"]').click();
    });
    it('should show a list of favorites', () => {
        cy.get('*[data-test*="items-container"]').first().should('be.visible');
        cy.get('*[data-test*="item-in-list"]').first().should('be.visible');
        cy.get('*[data-test*="add-to-favorites"]').click();
        cy.get('*[data-test*="show-favorites"]').click();
        cy.get('*[data-test*="favorites-modal"]').first().should('be.visible');
        cy.get('*[data-test*="item-in-list"]').first().should('be.visible');
    });
});
