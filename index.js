var express = require('express');
var app = express();
var axios = require('axios');
var parseString = require('xml2js').parseString;

var port = process.env.PORT || 8000;

app.get('/', function (req, res, next) {
    if (req.query.Username && req.query.Format === 'json') {
        axios.get('https://medium.com/feed/@' + req.query.Username).then((Response) => {
            parseString(Response.data, function (err, result) {
                let channelData = result.rss.channel[0];
                let items = [];
                channelData.item.forEach(element => {
                    items.push({
                        title: element.title[0],
                        link: element.link[0],
                        categories: element.category,
                        creator: element["dc:creator"][0],
                        publishDate: element.pubDate[0],
                        content: element["content:encoded"][0],
                    });
                });
                let returnData = {
                    title: channelData.title,
                    description: channelData.description,
                    link: channelData.link,
                    item: items
                }
                res.send(returnData);
            });
        }).catch(err => res.send(err));
    }
    else if (req.query.Username) {
        axios.get('https://medium.com/feed/@' + req.query.Username).then((Response) => {
            console.log(Response.data);
            
            res.send(Response.data);
        });

    }
    else {
        console.log('got into else');
        res.status(400).send({ 'error': 'Please specify Username in query format as stated on https://github.com/aarshad786/MediumPostsAPI' });
    }

});
app.listen(port);
console.log('Magic happens on port ' + port);