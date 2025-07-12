
/**
 * @file tests.js
 * @author Brendan Dileo, July 2025
 * 
 * The main tests file that runs each of the tests
 */


import { createDriver } from './driver.js';
import { runNavTests } from './nav.test.js';
import { runHomeTests } from './home.test.js';

(async() => {

    // Create a new selenium webdriver instance
    const driver = await createDriver();
    
    try {
        // Instructs driver to navigate to url
        await driver.get('http://localhost:5173/');

        // Check page title
        const pageTitle = await driver.getTitle();
        console.log(`Page title is: ${pageTitle}`);

        // Run navigation tests
        await runNavTests(driver);

        // Run home page tests
        await runHomeTests(driver);

    } catch (error) {
        console.error("Error navigating to the development URL:", error);
    } finally {
        // Quit the driver to close the browser
        await driver.quit();
        console.log("Selenium test completed.");
    }
})();
