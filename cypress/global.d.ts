declare namespace Cypress {
  interface Chainable {
    indexItems(i?: number, first: any): Chainable<JQuery<HTMLElement>>;
  }
}
