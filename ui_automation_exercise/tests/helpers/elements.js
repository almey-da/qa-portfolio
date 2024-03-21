export function get(selector) {
    return cy.get(selector) 
}

export function fillField(selector, value) {
    return cy.get(selector).type(value)
}

export function clearAndFillField(selector, value) {
    return cy.get(selector).clear().type(value)
}

export function fillFieldAndEnter(selector, value) {
    return cy.get(selector).type(value, { force: true }).type('{enter}')
}

export function click(selector){
    return cy.get(selector).click()
}

export function clickMultiple(selector){
    return cy.get(selector).click({ multiple: true, force: true })
}

export function select(selector, value){
    return cy.get(selector).select(value);
}

export function clickDropDown(selector, value){
    return cy.get(selector).contains(value).click()
}

export function uploadFile(selector, value){
    return cy.get(selector).selectFile(value)
}

export function forceClick(selector){
    return cy.get(selector).click({force:true})
}

export function wait(value){
    return cy.wait(value)
}