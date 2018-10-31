/**
 * Created by zhouli on 18/10/30
 */
describe('node-blog-admin home', function() {
    it('进入首页', function() {
        cy.visit('http://localhost:8085/')
    });
    it('有一个发送请求的按钮', () => {
        cy.get('.request-btn').click();
        cy.wait(3000).get('.request-res').should('have.text','请求结果');
    })
});
