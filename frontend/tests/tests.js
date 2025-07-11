
/**
 * @file tests.js
 * @author Brendan Dileo, July 2025
 * 
 * Defines the test cases for the frontend components and utilities
 * to ensure functionality and correctness
 */


import { Builder, By, until } from 'selenium-webdriver';
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

    try {
        // Instructs driver to navigate to url
        await driver.get('http://localhost:5173/');

        // Check page title
        const pageTitle = await driver.getTitle();
        console.log(`Page title is: ${pageTitle}`);

        // Wait for the header element to be present
        // and locate by css selector
        const headerElement = await driver.wait(
            until.elementLocated(By.css('h2.text-4xl')),            
            10000
        );
        
        // Retrieve the text content of the header element
        const headerText = await headerElement.getText();
        console.log(`Header text: ${headerText}`);

    } catch (error) {
        console.error("Error navigating to the development URL:", error);
    } finally {
        // Quit the driver to close the browser
        await driver.quit();
        console.log("Selenium test completed.");
    }
})();
