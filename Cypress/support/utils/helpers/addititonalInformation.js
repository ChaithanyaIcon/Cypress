import { input, inputcontains,epicSelector } from './generalFunctions'
export const additionalInformation = () => {

cy.get(':nth-child(2) > .epic-form-group__field > .epic-select > .popper > :nth-child(2) > .epic-input > .input-field-wrapper > input').click()
cy.contains('[data-test-id="marital-status"] .drop-down .epic-text','Single').click()

cy.get(':nth-child(3) > .epic-form-group__field > .epic-select > .popper > :nth-child(2) > .epic-input > .input-field-wrapper > input').click()
cy.contains('[data-test-id="indigenous-status"]  .popper .result .epic-text','No').click()
cy.get(':nth-child(4) > .epic-form-group__field > .epic-select > .popper > :nth-child(2) > .epic-input > .input-field-wrapper > input').click()
cy.contains('[data-test-id="islander-status"] .popper .result .epic-text','No').click()


}