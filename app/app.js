
const express = require('express');
const initialize = require('express-openapi').initialize

const app = express();

initialize({
    app,
    apiDoc: './openapi.spec.yaml',
    operations: {
        index: (req, res) => {
            res.json({
                greeting: 'Hello world'
            })
        }
    },
});

app.listen(3000, () => {
    console.log(`openapi-plugin-bug listening at http://localhost:3000`);
});

