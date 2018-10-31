/**
 * Created by zhouli on 18/10/30
 */

context('node-blog-admin list', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8085/#/list')
    })

    it('有一个发送请求的按钮', () => {
        cy.get('.request-btn').click()
    })

})
