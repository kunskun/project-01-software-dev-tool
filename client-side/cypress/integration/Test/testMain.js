describe('component test familypagehost', () => {
    beforeEach(() => {
        cy.visit('/family')
    })
        it("เช็คtitle", () => {
            // test
            cy.contains('Host').should('exist')
            cy.contains('Member').should('exist') 
    })
    it("เช็คbutton", () => {
        // test
        cy.contains('CREATE').should('exist')
        cy.contains('JOIN').should('exist')
    })

})