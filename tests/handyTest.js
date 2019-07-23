var handy = {}
var servicesData = require('../testAssets/servicesAsset')
var partnerData = require('../testAssets/partnerAsset')

module.exports = {
    beforeEach: browser => {
        handy = browser.page.handyObject()
    },
    after: browser => {
        handy.end()
    },
    'Log In Test': browser => {
        handy.navigate()
        .waitForElementPresent('@handy')
        .click('@logIn')
        .pause(3000)
        .setValue('@loginEmail', "tulaloo82@gmail.com")
        .setValue('@loginPassword', "P@ssw0rd")
        .click('@submitLogin')
        .verify.visible('@allServices') 
        .clearValue('@loginEmail')
        .setValue('@loginEmail', "brianne914@gmail.com")
        .clearValue('@loginPassword')
        .setValue('@loginPassword', "fakePassword")
        .click('@submitLogin')
        .verify.visible('.login-error')
    },
    'Service Test': browser => {
        servicesData.forEach(test => {
            handy.navigate()
            handy.servicesTest(test)
        })
    },
    'Partner Help Test': browser => {
        partnerData.forEach(test => {
            handy.navigate()
            handy.partnerHelpTest(test)
        })
    }

}