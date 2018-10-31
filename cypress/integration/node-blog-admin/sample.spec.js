/**
 * Created by zhouli on 18/10/26
 */
describe('My First Test', function() {
    it('Does not do much!', function() {
        expect(true).to.equal(true)
    })
})
describe('My sec Test', function() {
    it('Visits the huilianyi', function() {
        cy.visit('http://uat.huilianyi.com')
    })
})



