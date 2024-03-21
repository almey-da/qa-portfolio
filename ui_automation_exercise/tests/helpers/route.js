export const BASE_URL = {
    LOGIN: Cypress.env("baseUrl")
}

export function visit(routes) {
    cy.visit(BASE_URL.LOGIN + routes)
}