
/**
 * @file tests.js
 * @author Brendan Dileo, July 2025
 * 
 * Defines the test cases for the frontend components and utilities
 * to ensure functionality and correctness
 */


import { Builder } from 'selenium-webdriver';
import firefox from 'selenium-webdriver/firefox.js';

(async() => {
    
    // Create config object for firefox
    let options = new firefox.Options();
    // options.headless();

    // Creates a new driver which acts as the browser to test on
    let driver = await new Builder()
        .forBrowser('firefox')
        .setFirefoxOptions(options)
        .build();
    
    console.log("Starting Selenium test...");
})();
