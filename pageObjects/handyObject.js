var handyCommand = {
    servicesTest: function (array) {
        console.log(`Checking: ${array}`)
        this
        .waitForElementPresent('@handy')
        .moveToElement('@allServices', 10, 20)
        .waitForElementVisible(array.link)
        .click(array.link)
        .waitForElementVisible(array.verify)
        return this
    },
    partnerHelpTest: function (array) {
        console.log(`Checking: ${array}`)
        this
        .waitForElementPresent('@handy')
        .click('@help')
        .waitForElementVisible('@partnerHelp')
        .click('@handyPartner')
        .click(array.partner)
        .waitForElementVisible(array.confirm)
        return this
    }
}
module.exports = {
    url: 'https://www.handy.com/',
    commands: [handyCommand],
    elements: {
        handy: '.template-home',
        logIn: {
            selector: '(//a[@href="/login"])[2]',
            locateStrategy: 'xpath'
        },
        help: {
            selector: '(//a[@href="/help"])[3]',
            locateStrategy: 'xpath'
        },
        becomePro: {
            selector: '(//a[@href="/apply"])[2]',
            locateStrategy: 'xpath'
        },
        blog: {
            selector: '(//a[@href="/blog"])[2]',
            locateStrategy: 'xpath'
        },
        shop: {
            selector: '//a[contains(text(),"Shop")])[2]',
            locateStrategy: "xpath"
        },
        allServices: {
            selector: '(//a[@href="/services"])[2]',
            locateStrategy: "xpath"
        },
        seeAll: 'a[href="services"]',
        searchService: '.aa-input',
        search: 'span[class="search-icon input-group-label"]',
        outlets: {
            selector: '(//a[@href="/services/outlets"])[2]',
            locateStrategy: 'xpath'
        },
        homeClean: {
            selector: '(//a[@href="/services/home-cleaning"])[2]',
            locateStrategy: 'xpath'
        },
        moveClean: {
            selector: '(//a[@href="/services/move-out-in-cleaning"])[2]',
            locateStrategy: 'xpath'
        },
        officeClean: {
            selector: '(//a[@href="/services/office-cleaning"])[2]',
            locateStrategy: 'xpath'
        },
        deepClean: {
            selector: '(//a[@href="/services/deep-cleaning-service"])[2]',
            locateStrategy: 'xpath'
        },
        tvMount: {
            selector: '(//a[@href="/services/mount-tv"])[2]',
            locateStrategy: 'xpath'
        },
        hanging: {
            selector: '(//a[@href="/services/hanging-pictures-shelves"])[2]',
            locateStrategy: 'xpath'
        },
        fixture: {
            selector: '(//a[@href="/services/light-fixtures"])[2]',
            locateStrategy: 'xpath'
        },
        fan: {
            selector: '(//a[@href="/services/ceiling-fan"])[2]',
            locateStrategy: 'xpath'
        },
        assembly: {
            selector: '(//a[@href="/services/furniture-assembly"])[2]',
            locateStrategy: 'xpath'
        },
        handyman: {
            selector: '(//a[@href="/services/other-handyman-service"])[2]',
            locateStrategy: 'xpath'
        },
        plumbing: {
            selector: '(//a[@href="/services/other-plumbing"])[2]',
            locateStrategy: 'xpath'
        },
        faucet: {
            selector: '(//a[@href="/services/faucets-replacement"])[2]',
            locateStrategy: 'xpath'
        },
        toilet: {
            selector: '(//a[@href="/services/toilet-trouble"])[2]',
            locateStrategy: 'xpath'
        },
        electric: {
            selector: '(//a[@href="/services/other-electrical"])[2]',
            locateStrategy: 'xpath'
        },
        movingHelp: {
            selector: '(//a[@href="/services/moving-help"])[2]',
            locateStrategy: 'xpath'
        },
        lawnCare: { 
            selector: '(//a[@href="/services/lawn-care-maintenance-service?redirect_source=nav_bar"])[2]',
            locateStrategy: 'xpath'
        },
        gutters: {
            selector: '(//a[@href="/services/gutter-installation?redirect_source=nav_bar"])[2]',
            locateStrategy: 'xpath'
        },
        treeRemoval: {
            selector: '(//a[@href="/services/tree-removal?redirect_source=nav_bar"])[2]',
            locateStrategy: 'xpath'
        },
        treeTrim: {
            selector: '(//a[@href="/services/tree-trimming?redirect_source=nav_bar"])[2]',
            locateStrategy: 'xpath'
        },
        fence: {
            selector: '(//a[@href="/services/fence-installation?redirect_source=nav_bar"])[2]',
            locateStrategy: 'xpath'
        },
        deckRepair: {
            selector: '(//a[@href="/services/deck-and-porch-repair?redirect_source=nav_bar"])[2]',
            locateStrategy: 'xpath'
        },
        deckInstall: {
            selector: '(//a[@href="/services/deck-repair-installation?redirect_source=nav_bar"])[2]',
            locateStrategy: 'xpath'
        },
        exteriorPaint: {
            selector: '(//a[@href="/services/exterior-painting?redirect_source=nav_bar"])[2]',
            locateStrategy: 'xpath'
        },
        exteriorSurface: {
            selector: '(//a[@href="/services/power-washing?redirect_source=nav_bar"])[2]',
            locateStrategy: 'xpath'
        },
        bathRemodel: {
            selector: '(//a[@href="/services/bathroom-remodeling?redirect_source=nav_bar"])[2]',
            locateStrategy: 'xpath'
        },
        kitchenRemodel: {
            selector: '(//a[@href="/services/kitchen-remodeling?redirect_source=nav_bar"])[2]',
            locateStrategy: 'xpath'
        },
        basementRemodel: {
            selector: '(//a[@href="/services/basement-remodeling?redirect_source=nav_bar"])[2]',
            locateStrategy: 'xpath'
        },
        renovation: {
            selector: '(//a[@href="/services/major-home-renovations?redirect_source=nav_bar"])[2]',
            locateStrategy: 'xpath'
        },
        woodFloor: {
            selector: '(//a[@href="/services/installing-wood-flooring?redirect_source=nav_bar"])[2]',
            locateStrategy: 'xpath'
        },
        roofInstall: {
            selector: '(//a[@href="/services/install-asphalt-shingle-roofing?redirect_source=nav_bar"])[2]',
            locateStrategy: 'xpath'
        },
        roofRepair: {
            selector: '(//a[@href="/services/repair-asphalt-shingle-roofing?redirect_source=nav_bar"])[2]',
            locateStrategy: 'xpath'
        },
        windowInstall: {
            selector: '(//a[@href="/services/6-windows-installation?redirect_source=nav_bar"])[2]',
            locateStrategy: 'xpath'
        },
        interiorPaint: {
            selector: '(//a[@href="/services/painting"])[2]',
            locateStrategy: 'xpath'
        },
        windowTreatment: {
            selector: '(//a[@href="/services/install-window-treatments"])[2]',
            locateStrategy: 'xpath'
        }, 
        houseCleaning: {
            selector: '//h1[contains(text(), "House Cleaning")]',
            locateStrategy: 'xpath'
        },
        moveCleaning: {
            selector: '//*[contains(text(), "Cleaning or Move In Cleaning")]',
            locateStrategy: 'xpath'
        },
        officeCleaning: {
            selector: '//p[contains(text(), "Office Cleaning")]',
            locateStrategy: 'xpath'
        },
        deepCleaning: {
            selector: '//p[text()="Deep Cleaning Service"]',
            locateStrategy: 'xpath'
        },
        tvMounting: {
            selector: '//p[contains(text(), "TV Mounting")]',
            locateStrategy: 'xpath'
        },
        pictureShelf: {
            selector: '//p[text()="Hanging Pictures and Installing Shelves"]',
            locateStrategy: 'xpath'
        },
        fixtureInstallation: {
            selector: '//p[text()="Light Fixture Installation"]',
            locateStrategy: 'xpath'
        },
        furnitureAssembly: {
            selector: '//div[text()="Furniture Assembly"]',
            locateStrategy: 'xpath'
        },
        generalHandyman: {
            selector: '//p[text()="Handyman Service"]',
            locateStrategy: 'xpath'
        },
        generalPlumbing: {
            selector: '//p[text()="Plumbing Service"]',
            locateStrategy: 'xpath'
        },
        faucetReplacement: {
            selector: '//p[text()="Faucets Replacement"]',
            locateStrategy: 'xpath'
        },
        toiletService: {
            selector: '//p[contains(text(), "Toilets")]',
            locateStrategy: 'xpath'
        },
        electricService: {
            selector: '//p[text()="Electrical Service"]',
            locateStrategy: 'xpath'
        },
        outletsAndSwitches: {
            selector: '//p[contains(text(), "Outlets & Switches")]',
            locateStrategy: 'xpath'
        },
        moveHelp: {
            selector: '//p[text()="Moving Help"]',
            locateStrategy: 'xpath'
        },
        lawnMaintenance: {
            selector: '//h1/span[contains(text(), "Lawn Maintenance & Mowing Services")]',
            locateStrategy: 'xpath'
        },
        gutterInstall: {
            selector: '//h1/span[contains(text(), "Seamless Gutter Installers")]',
            locateStrategy: 'xpath'
        },
        treeShrubRemoval: {
            selector: '//span[contains(text(), "Tree or Shrub Removal")]',
            locateStrategy: 'xpath'
        },
        treeContractor: {
            selector: '//span[contains(text(), "Tree Contractors")]',
            locateStrategy: 'xpath'
        },
        woodFence: {
            selector: '//span[contains(text(), "Wood Fence Installers")]',
            locateStrategy: 'xpath'
        },
        porchRepair: {
            selector: '//span[contains(text(), "Porch Repair")]',
            locateStrategy: 'xpath'
        },
        porchBuilder: {
            selector: '//span[contains(text(), "Builders")]',
            locateStrategy: 'xpath'
        },
        exteriorPainters: {
            selector: '//span[contains(text(), "Exterior Home")]',
            locateStrategy: 'xpath'
        },
        powerWash: {
            selector: '//span[contains(text(), "Power Washing")]',
            locateStrategy: 'xpath'
        },
        bathroomRemodel: {
            selector: '//span[contains(text(), "Bathroom Remodelers")]',
            locateStrategy: 'xpath'
        },
        kitchenRemodelers: {
            selector: '//span[contains(text(), "Kitchen Remodelers")]',
            locateStrategy: 'xpath'
        },
        basementContractor: {
            selector: '//span[contains(text(), "Basement Finishing")]',
            locateStrategy: 'xpath'
        },
        renoContractor: {
            selector: '//span[contains(text(), "Home Renovation")]',
            locateStrategy: 'xpath'
        },
        woodFlooring: {
            selector: '//span[contains(text(), "Hardwood Flooring")]',
            locateStrategy: 'xpath'
        },
        roofingInstallers: {
            selector: '//span[contains(text(), "Asphalt Roof")]',
            locateStrategy: 'xpath'
        },
        roofRepairs: {
            selector: '//span[contains(text(), "Asphalt Roof")]',
            locateStrategy: 'xpath'
        },
        windowReplacement: {
            selector: '//span[contains(text(), "Window Replacement")]',
            locateStrategy: 'xpath'
        },
        paintingServices: {
            selector: '//p[text()="Interior Painting Services"]',
            locateStrategy: 'xpath'
        },
        treatmentInstall: {
            selector: '//p[text()="Window Treatments Installation"]',
            locateStrategy: 'xpath'
        },
        seeAllServices: {
            selector: '//h1[text()="Choose a service to get started."]',
            locateStrategy: 'xpath'
        },
        loginEmail: 'input[name="user_session[email]"]',
        loginPassword: 'input[name="user_session[password]"]',
        submitLogin: 'input[name="commit"]',
        partnerHelp: 'li[class="list-knowledge-base-item partner-select"]',
        handyPartner: '.select-selected',
        partnerArt: {
            selector: '//div[contains(text(), "Art.com")]',
            locateStrategy: 'xpath'
        },
        partnerArmy: {
            selector: '//div[contains(text(), "Army")]',
            locateStrategy: 'xpath'
        },
        partnerCostco: {
            selector: '//div[contains(text(), "Costco")]',
            locateStrategy: 'xpath'
        },
        partnerCrate: {
            selector: '//div[contains(text(), "Crate and Barrel")]',
            locateStrategy: 'xpath'
        },
        partnereBay: {
            selector: '//div[contains(text(), "eBay")]',
            locateStrategy: 'xpath'
        },
        partnerFacebook: {
            selector: '//div[contains(text(), "Facebook")]',
            locateStrategy: 'xpath'
        },
        partnerLamps: {
            selector: '//div[contains(text(), "Lamps Plus")]',
            locateStrategy: 'xpath'
        },
        partnerLowes: {
            selector: '//div[contains(text(), "Lowe")]',
            locateStrategy: 'xpath'
        },
        partnerWalmart: {
            selector: '//div[contains(text(), "Walmart")]',
            locateStrategy: 'xpath'
        },
        partnerWayfair: {
            selector: '//div[contains(text(), "Wayfair")]',
            locateStrategy: 'xpath'
        },
        art: {
            selector: '//h2[contains(text(), "Art.com")]',
            locateStrategy: 'xpath'
        },
        army: {
            selector: '//h2[contains(text(), "Army & Air Force")]',
            locateStrategy: 'xpath'
        },
        costco: {
            selector: '//h2[contains(text(), "Costco")]',
            locateStrategy: 'xpath'
        },
        crate: {
            selector: '//h2[contains(text(), "Crate")]',
            locateStrategy: 'xpath'
        },
        ebay: {
            selector: '//h2[contains(text(), "eBay")]',
            locateStrategy: 'xpath'
        },
        facebook: {
            selector: '//h2[contains(text(), "Facebook")]',
            locateStrategy: 'xpath'
        },
        lamps: {
            selector: '//h2[contains(text(), "Lamps")]',
            locateStrategy: 'xpath'
        },
        lowes: {
            selector: '//h2[contains(text(), "Lowe")]',
            locateStrategy: 'xpath'
        },
        walmart: {
            selector: '//h4[contains(text(), "Welcome to the Walmart")]',
            locateStrategy: 'xpath'
        },
        wayfair: {
            selector: '//h4[contains(text(), "Wayfair")]',
            locateStrategy: 'xpath'
        },
    }
}
