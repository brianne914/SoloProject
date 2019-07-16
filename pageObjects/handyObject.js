module.exports = {
    url: 'https://www.handy.com/',
    elements: {
        logIn: {
            selector: '//a[@href="/login"])[2]',
            locateStrategy: 'xpath'
        },
        // help: '',
        // becomePro: '',
        // blog: '',
        shop: {
            selector: '//a[contains(text(),"Shop")])[2]',
            locateStrategy: "xpath"
        },
        allServices: {
            selector: '//a[contains(text(),"All Services")])[2]',
            locateStrategy: "xpath"
        },
        handy: '.template-home',
        outlets: {
            selector: '(//a[@href="/services/outlets"])[1]',
            locateStrategy: 'xpath'
        }
    }
}
