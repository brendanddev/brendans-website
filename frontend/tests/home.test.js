
/**
 * @file home.test.js
 * @author Brendan Dileo, July 2025
 * 
 * Defines the tests for the home page
 */

import { By, until, Key } from 'selenium-webdriver';

export async function runHomeTests(driver) {

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

    // Wait for the terminal prompt to be present
    const terminalPrompt = await driver.wait(
        until.elementLocated(By.css('span.text-green-400')),
        10000
    );

    // Wait until the text in the terminal prompt is fully rendered
    await driver.wait(async () => {
        const text = await terminalPrompt.getText();
        return text.trim().length > 0;
    }, 10000);

    // Retrieve the text content of the terminal prompt
    const terminalPromptText = await terminalPrompt.getText();
    console.log(`Terminal prompt text: ${terminalPromptText}`);

    // Validate test
    if (terminalPromptText.includes("brendan@portfolio")) 
        console.log("PASSED: Terminal prompt text is correct.");

    // Wait for the terminal input to be visible
    const terminalInput = await driver.wait(
        until.elementLocated(By.css('input.flex-1')),
        10000
    );

    // Types 'help' into the terminal input field
    await terminalInput.sendKeys('help', Key.ENTER);

    // Wait for the terminal output to be present
    const terminalOutput = await driver.wait(
        until.elementLocated(By.css('p.mb-2')),
        10000
    );

    // Wait until the text in the terminal output is fully rendered
    // and expected text is present
    await driver.wait(async () => {
        const text = await terminalOutput.getText();
        return text.includes("Here is a list of supported commands:");
    }, 10000);

    // Retrieve the text content of the terminal output
    const terminalOutputText = await terminalOutput.getText();
    console.log(`Terminal output text: ${terminalOutputText}`);

    // Validate test
    if (terminalOutputText.includes("Here is a list of supported commands:")) 
        console.log("PASSED: Terminal output text is correct.");
}
