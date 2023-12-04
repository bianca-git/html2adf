import { app } from '@azure/functions';
import convertHtmlToADF from '../convertHtmlToADF.js';

app.http('html2adf', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        try {
            context.info(`Http function processed request for url "${request.url}"`);
            const htmlInput = await request.json();
            const adfOutput = JSON.parse(convertHtmlToADF(htmlInput.html));
            const data = JSON.stringify({ id: htmlInput.id, adf: adfOutput });
            context.info(`Http function returning data "${data}"`);
            return { headers: { 'Content-Type': 'application/json' }, body: data }
        } catch (error) {
            context.error(`Error converting HTML to ADF: ${error.message}`);
            return { status: 500, body: `Error converting HTML to ADF: ${error.message}` }
        }
    }
});


/** This code is part of an Azure Functions application that exposes an 
 * HTTP endpoint for converting HTML to Atlassian Document Format (ADF). 
 * 
 * The script begins by importing the `app` object from the `@azure/functions` 
 * package and a `convertHtmlToADF` function from a local module. 
 * 
 * The `app.http` function is then called to define a new HTTP function 
 * named 'html2adf'. This function is configured to accept POST requests 
 * and does not require authentication.
 * 
 * The `handler` property of the configuration object is an asynchronous 
 * function that processes incoming HTTP requests. This function takes 
 * two arguments: `request`, which represents the incoming HTTP request, 
 * and `context`, which provides methods for interacting with the Azure 
 * Functions runtime.
 * 
 * Inside the handler function, an informational message is logged with 
 * the URL of the incoming request. The request's JSON body is then parsed 
 * and its 'html' property is passed to the `convertHtmlToADF` function. 
 * The output of this function is parsed as JSON and assigned to `adfOutput`.
 * 
 * Next, an object containing the 'id' from the original request and the 
 * converted ADF is stringified into JSON format and logged as an informational 
 * message.
 * 
 * Finally, the handler function returns an object representing the HTTP 
 * response. This object includes a 'Content-Type' header set to 
 * 'application/json' and a body containing the JSON string created earlier.
**/