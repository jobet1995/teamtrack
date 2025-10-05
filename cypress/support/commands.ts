/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
      drag(options?: Partial<Cypress.TypeOptions>): Chainable<Element>;
      dismiss(options?: Partial<Cypress.TypeOptions>): Chainable<Element>;
      visit(url: string, options?: Partial<Cypress.VisitOptions>): Chainable<Window>;
    }
  }
}

Cypress.Commands.overwrite(
  'visit',
  (originalFn, url, options) => {
    // For example, log the visit
    console.log(`Visiting: ${url}`);
    return originalFn(url, options);
  }
);

export {};
