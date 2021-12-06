// Install express server
const express = require('express');
const path = require('path');
const app = express();

// Serve only the static files from the dist directory
app.use(express.static(_dirname + '/dist/angularintro'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(_dirname + '/dist/angularintro/index.html'))
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);