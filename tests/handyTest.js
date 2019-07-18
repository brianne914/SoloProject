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
    },
      'Log In Test': browser => {
        handy.navigate()
        .waitForElementPresent('@handy')
        .click('@logIn')
        .setValue('@loginEmail', "tulaloo82@gmail.com")
        .setValue('@loginPassword', "P@ssw0rd")
        .click('@submitLogin')
        .pause()
      }
}