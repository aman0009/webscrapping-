var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs =  require('fs');


var app = express();
var port = 8000;


// To scrap the code in the console 
//var url = "http://google.com";
//request(url, function(err, resp, body){
// if(err)
 // {
 // 	console.log(err);
 // }
  //else
 // {
 // 	console.log(body);
//  }
 
//})
//


// To scarp the code in the downloads folder as google.html
//var destination = fs.createWriteStream('./downloads/google.html');
//var url = "http://google.com";
//request(url)
//  .pipe(destination);


app.get('/scrape', function(req, resp){
	url = 'https://timesofindia.indiatimes.com/life-style/spotlight/rani-padmavati-history-know-the-complete-story-of-rani-padmavati/articleshow/61685630.cms';
})



var url = "https://timesofindia.indiatimes.com/life-style/spotlight/rani-padmavati-history-know-the-complete-story-of-rani-padmavati/articleshow/61685630.cms";
request(url,function(err, resp, body){
	var $ = cheerio.load(body);
	var heading = $('.heading1');
	var headingText = heading.text();

    var Nor = $('.Normal');
	var NorText = Nor.text();

    var history = {
    	heading: headingText,
        Nor: NorText
    };

    console.log(history);


})



app.listen(port);
console.log('app listening at' + port);