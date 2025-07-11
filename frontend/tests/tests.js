
/**
 * @file tests.js
 * @author Brendan Dileo, July 2025
 * 
 * Defines the test cases for the frontend components and utilities
 * to ensure functionality and correctness
 */


import { Builder, By, until } from 'selenium-webdriver';
import firefox from 'selenium-webdriver/firefox.js';
import dotenv from 'dotenv';

dotenv.config();
const devUrl = process.env.DEV_URL;

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

    try {
        // Instructs driver to navigate to url
        await driver.get(devUrl);
    } catch (error) {
        console.error("Error navigating to the development URL:", error);
    }
})();
