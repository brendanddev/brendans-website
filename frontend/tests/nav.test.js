
/**
 * @file nav.test.js
 * @author Brendan Dileo, July 2025
 * 
 * Defines the tests for the nav bar component
 */

import { By, until } from 'selenium-webdriver';

export async function runNavTests(driver) {
     // Wait for the navbar to be present
    const navbar = await driver.wait(
        until.elementLocated(By.css('div.max-w-7xl.mx-auto')),
        10000
    );

    // Validate that the navbar is displayed
    const isNavbarDisplayed = await navbar.isDisplayed();
    console.log(`Navbar is displayed: ${isNavbarDisplayed}`);

    // Check if the navbar contains the expected links
    const navLinks = await driver.findElements(By.css('ul li a'));
    const expectedLinks = ["home", "about", "projects", "contact"];

    // Extract text from all links
    const linkTexts = await Promise.all(navLinks.map(async (link) => {
        return (await link.getText()).trim().toLowerCase();
    }));

    // Compare links against expected links
    for (const expected of expectedLinks) {
        if (!linkTexts.includes(expected)) {
            throw new Error(`Missing expected nav link: ${expected}`);
        }
    }

    console.log("PASSED: All expected nav links are present.");
}