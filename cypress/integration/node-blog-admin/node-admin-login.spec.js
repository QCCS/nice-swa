/**
 * Created by zhouli on 18/10/30
 */

context('node-blog-admin list post', () => {
    describe('登录测试', function() {
        it('跳转博客页面', function() {
            cy.visit('http://localhost:8085/#/list/PostNew')
        })
        it('显示登陆按钮', () => {
            cy.get('.open-login-model').click()
        })
        it('弹出模态框', () => {
            cy.get('.open-login-btn').click()
        })
        it('选择手机登陆方式', () => {
            cy.get('.phone-login-way').click()
        })

        it('输入手机号', () => {
            cy.get('.mobile-input-wrap').find('input').type('15921552991');
        })
        it('输入密码', () => {
            cy.get('.password-input-wrap').find('input').type('mac123');
        })
        it('点击登陆按钮', () => {
            cy.wait(500)
            //下面监听请求
            cy.server();
            cy.route('get', '/api/*').as('login');
            cy.get('.mobile-password-login-btn').click();
            cy.wait('@login');
            // get the route
            cy.get('@login').should((xhr) => {
                console.log(xhr)
                expect(xhr.response.body.mobile).to.equal("15921552991")
                cy.wait(500);
                expect(sessionStorage.getItem('authorization')).to.include('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9');
            })
        })
        it('登陆之后确定', () => {
            cy.get('.logined-ok-btn').click()
        })
        it('新增博客', () => {
            cy.wait(1000)
            //下面监听请求
            cy.server()
            // Listen to POST to comments
            cy.route('POST', '/admin/post').as('postComment');
            cy.get('.new-post-save-btn').click()
            cy.wait('@postComment');
            // get the route
            cy.get('@postComment').should((xhr) => {
                console.log(xhr)
                // expect(xhr.response.body).to.equal("Authentication Error")
                expect(xhr.response.body.title).to.equal('recents');
                // expect(xhr.requestHeaders).to.have.property('Content-Type')
                // expect(xhr.responseBody).to.have.property('title', 'Using POST in cy.route()')
            })
        })



    })




})
