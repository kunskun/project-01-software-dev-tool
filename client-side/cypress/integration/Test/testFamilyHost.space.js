describe('component test familypagehost', () => {
    beforeEach(() => {
        cy.visit('/family/detail')
    })
        it("TestNameoffamily", () => {
            //  ทดสอบชื่อของแฟมมิลี่
            cy.contains('Netflix').should('exist')
            cy.contains('Sia o cha').should('exist') 
    })
    it("TestTitle", () => {
        // ทดสอบชื่อของหัวข้อต่างๆ
        cy.contains('ราคา').should('exist')
        cy.contains('ราคา/คน').should('exist')
        cy.contains('จำนวนคนสูงสุด').should('exist') 
    })
    it("TestValue", () => {
        // ทดสอบราคาในการหาร/จำนวนสมาชิก
        cy.contains('419 บาท').should('exist')
        cy.contains('69.83 บาท').should('exist')
        cy.contains('6/6 คน').should('exist') 
    })
    it("TestButton", () => {
        // ทดสอบตัวปุ่มกด button
        cy.contains('Edit').should('exist')
        cy.contains('History').should('exist')
    })
    it("Test_title_User", () => {
        // ทดสอบหัวข้อของ User
        cy.contains('MEMBER').should('exist')
        cy.contains('EMAIL').should('exist')
        cy.contains('PHONE').should('exist')
    })
    it("Test_Name_of_User", () => {
        // ทดสอบชื่อสมาชิกทั้งหมด
        cy.contains('แพรไหม (HOST)').should('exist')
        cy.contains('อนุชา').should('exist')
        cy.contains('แพรไหม').should('exist')
        cy.contains('อนุชา').should('exist')
        cy.contains('แพรไหม').should('exist')
        cy.contains('อนุชา').should('exist')
    })
    it("Test_Email_User", () => {
        // ทดสอบEmailสมาชิกทั้งหมด
        cy.contains('preamai@gmail.com').should('exist')
        cy.contains('anucha@gmail.com').should('exist')
        cy.contains('preamai@gmail.com').should('exist')
        cy.contains('anucha@gmail.com').should('exist')
        cy.contains('preamai@gmail.com').should('exist')
        cy.contains('anucha@gmail.com').should('exist')
    })
    it("Test_Phone_User", () => {
        // ทดสอบเบอร์โทรสมาชิกทั้งหมด
        cy.contains('0123456789').should('exist')
        cy.contains('0896547321').should('exist')
        cy.contains('0123456789').should('exist')
        cy.contains('0896547321').should('exist')
        cy.contains('0123456789').should('exist')
        cy.contains('0896547321').should('exist')
    })


})