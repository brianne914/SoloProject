const properties = require('./nightwatch.props')
module.exports = {
  "src_folders": "tests",
  "page_objects_path": "pageObjects",
  "selenium": {
    "start_process": true,
    "server_path": properties.resourcePath + properties.seleniumServer,
    "log_path": "",
    "port": 4445,
    "cli_args": {
      "webdriver.chrome.driver": properties.resourcePath + properties.chromedriver,
      "webdriver.gecko.driver": properties.resourcePath + properties.geckodriver,
      "webdriver.safari.driver": "/usr/bin/safaridriver"
    }
  },
  "test_settings": {
    "default": {
      "launch_url": "http://localhost",
      "selenium_port": 4445,
      "selenium_host": "localhost",
      "silent": true,
      "screenshots": {
        "enabled": false,
        "path": ""
      },
      "desiredCapabilities": {
        "browserName": "chrome",
      }
    },
    "chromeMobile": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "chromeOptions" : {
          "args": [
            "window-size=400,800"
          ]
        }
      }
    },
    "firefox": {
      "desiredCapabilities": {
        "browserName": "firefox",
        "marionette": true
      }
    },
    "safari": {
      "desiredCapabilities": {
        "browserName": "safari"
      }
    }
  }
}