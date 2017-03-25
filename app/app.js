const express = require('express'),
    path = require('path'),
    https = require('https'),
    OAuth2 = require('OAuth').OAuth2,
    app = express();

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/webContent'));

const oauth2 = new OAuth2('SFAK2KhywMua3TWUv9yA1Emeg', 'pukTWW7SMkeJWaz95B8n2VBAytRcTKAxFIQC1lDMSXlbv44H0y', 'https://api.twitter.com/', null,
    'oauth2/token', null);

let accessToken;

oauth2.getOAuthAccessToken('', {
    'grant_type': 'client_credentials'
}, (e, access_token) => {
    accessToken = access_token;
});


app.get('/getMeteoTweets', (req, res) => {
    const options = {
        hostname: 'api.twitter.com',
        path: `/1.1/search/tweets.json?q=%23meteo+%23${req.query.city}`,
        headers: {
            Authorization: 'Bearer ' + accessToken
        }
    };
    https.get(options, result => {
        let buffer = '';
        result.setEncoding('utf8');
        result.on('data', data => {
            buffer += data;
        });
        result.on('end', () => {
            res.json(JSON.parse(buffer));
        });
    });
});

app.listen(8080);