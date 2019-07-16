var handy = {}

module.exports = {
    beforeEach: browser => {
        handy = browser.page.handyObject()
        handy.navigate()
    },
    after: browser => {
        handy.end()
    },
    'Help Test': browser => {
        handy
            .waitForElementPresent('@handy')
            .moveToElement('@allServices', 10, 20)
            .click('outlets')
    },

}