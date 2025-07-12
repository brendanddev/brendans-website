
/**
 * @file driver.js
 * @author Brendan Dileo, July 2025
 * 
 * Defines the 
 */

import { Builder } from "selenium-webdriver";
import firefox from "selenium-webdriver/firefox.js";

export async function createDriver() {

    // Create config object for firefox
    const options = new firefox.Options();
    // options.headless();

    // Creates a new driver which acts as the browser to test on
    const driver = await new Builder()
        .forBrowser('firefox')
        .setFirefoxOptions(options)
        .build();

    return driver;
}