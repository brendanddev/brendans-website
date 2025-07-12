
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

        // Wait until the text in the header is fully rendered
        await driver.wait(async () => {
            const text = await headerElement.getText();
            return text.trim().length > 0;
        }, 10000);

        // Retrieve the text content of the header element
        const headerText = await headerElement.getText();
        console.log(`Header text: ${headerText}`);

        // Validate test
        if (headerText.includes("Brendan Dileo")) 
            console.log("PASSED: Header text is correct.");
        
        // Wait for subheader element to be present
        // and locate by css selector
        const subHeaderElement = await driver.wait(
            until.elementLocated(By.css('h3.text-lg')),
            10000
        );

        // Wait until the text in the subheader is fully rendered
        await driver.wait(async () => {
            const text = await subHeaderElement.getText();
            return text.trim().length > 0;
        }, 10000);

        // Retrieve the text content of the subheader element
        const subHeaderText = await subHeaderElement.getText();
        console.log(`Subheader text: ${subHeaderText}`);

        // Validate test
        if (subHeaderText.includes("Software Developer | Tech Enthusiast")) 
            console.log("PASSED: Subheader text is correct.");

        // Wait for the terminal element to be present
        const terminalHeader = await driver.wait(
            until.elementLocated(By.css('span.text-center')),
            10000
        );

        // Wait until the text in the terminal header is fully rendered
        await driver.wait(async () => {
            const text = await terminalHeader.getText();
            return text.trim().length > 0;
        }, 10000);

        // Retrieve the text content of the terminal header
        const terminalHeaderText = await terminalHeader.getText();
        console.log(`Terminal header text: ${terminalHeaderText}`);

        // Validate test
        if (terminalHeaderText.includes("brendans@website-terminal: ~")) 
            console.log("PASSED: Terminal header text is correct.");

        // span.text-green-400
        // brendan@portfolio:~$

    } catch (error) {
        console.error("Error navigating to the development URL:", error);
    } finally {
        // Quit the driver to close the browser
        await driver.quit();
        console.log("Selenium test completed.");
    }
})();
