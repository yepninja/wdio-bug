describe('Firefox scroll to element', () => {
    before(() => {
        browser.url('/')
    })
    it('scroll with execute', () => {
        browser.execute(el => el.scrollIntoView(), $('body'))
    })
    it('scroll with element method', () => {
        $('body').scrollIntoView()
    })
})