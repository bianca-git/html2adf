/** This module converts HTML to Atlassian Document Format (ADF). 
 * It uses several libraries to accomplish this: `jsdom`, `@atlaskit/adf-schema`, 
 * `@atlaskit/editor-json-transformer`, and `@atlaskit/editor-jira-transformer`.
 * The `JSDOM` library is used to create a simulated browser environment in Node.js. 
 * This is necessary because the conversion process requires certain 
 * browser-specific global objects like `window`, `DOMParser`, `Node`, and 
 * `HTMLElement`. These objects are not available in a Node.js environment by 
 * default, so they are simulated using `JSDOM`.
 * 
 * The `@atlaskit/adf-schema` library provides the default schema for ADF. This 
 * schema is used to initialize a `JIRATransformer` object, which is responsible 
 * for converting HTML to ADF.
 * 
 * The `@atlaskit/editor-json-transformer` library provides a `JSONTransformer` 
 * object, which is used to convert ADF to JSON.
 * 
 * The `convertHtmlToADF` function is the main function in this module. It takes 
 * an HTML string as input, simulates a browser environment, converts the HTML to 
 * ADF using the `JIRATransformer`, converts the ADF to JSON using the 
 * `JSONTransformer`, and finally returns the JSON as a string.
 * 
 * The `convertHtmlToADF` function could be used in a larger application to 
 * convert user-generated HTML content to a format that can be stored and 
 * manipulated more easily.
 */

import { JSDOM } from 'jsdom';
import { defaultSchema } from '@atlaskit/adf-schema/dist/cjs/schema/default-schema.js';
import { JSONTransformer } from '@atlaskit/editor-json-transformer';
import { JIRATransformer } from '@atlaskit/editor-jira-transformer';

// Initialize the transformers
const jiraTransformer = new JIRATransformer(defaultSchema);
const adfTransformer = new JSONTransformer();

/**
 * Converts HTML to ADF and logs the result.
 * @param {string} html - The HTML string to be converted.
 */
function convertHtmlToADF(html) {
  // Simulate browser environment
  const dom = new JSDOM('<!doctype html><html><body></body></html>');
  global.window = dom.window;
  global.DOMParser = window.DOMParser;
  global.Node = dom.window.Node;
  global.HTMLElement = dom.window.HTMLElement; 

  // Convert HTML to ADF
  const pmNode = jiraTransformer.parse(html);

  // Convert ADF to JSON
  const adfJson = adfTransformer.encode(pmNode);

  // Log the result
  return JSON.stringify(adfJson)
}

export default convertHtmlToADF
