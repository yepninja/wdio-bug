describe('Firefox scroll to element', () => {
    before(() => {
        browser.url('/')
    })
    it('set window size', () => {
        browser.setWindowSize(1000, 400)
    })
})