import { app } from '@azure/functions';
import convertHtmlToADF from '../convertHtmlToADF.js';

app.http('html2adf', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.info(`Http function processed request for url "${request.url}"`);
        const htmlInput = await request.json();
        const adfOutput = JSON.parse(convertHtmlToADF(htmlInput.html));
        const data = JSON.stringify({ id: htmlInput.id, adf: adfOutput });
        context.info(`Http function returning data "${data}"`);
        return { headers: { 'Content-Type': 'application/json' }, body: data }
    }
});
