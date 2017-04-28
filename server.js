const cors = require('cors');
const express = require('express');
const twit = require('twitter');

const app = express();

const twitter = new twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

app.use(cors());

app.set('port', (process.env.PORT || 8000));

app.get('/tweets', (req, res, next) => {
  twitter.get('statuses/user_timeline', {screen_name: 'affirmationboss'}, (error, tweets, response) => {
    if(error) throw error;
    res.send(tweets);
    console.log(tweets);
    console.log(response);
  });
});

// original code
// app.get('/tweets', function(req, res, next) {
//   twitter.get('statuses/user_timeline', {screen_name: 'affirmationboss'}, function(error, tweets, response){
//     if(error) throw error;
//     res.send(tweets);
//     console.log(tweets);
//     console.log(response);
//   });
// });

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
