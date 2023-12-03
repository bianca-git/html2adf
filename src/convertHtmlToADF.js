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
