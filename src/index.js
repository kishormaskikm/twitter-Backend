import express from "express";
import {connect} from "./config/database.js";
import Tweet from "./models/tweet.js";
import Hashtag from "./models/hashtag.js";
import TweetRipository from "./repository/tweet-repository.js";

const app = new express();

app.listen(3000, async ()=>{
    console.log("Server is running on port 3000");
    //mongo db connection setup
    connect();
    // Tweet.create({
    //     content : "this is my first tweet",
    //     likes : 25,
    //     noOfTweets : 10,
    //     comments : "hello"
    // })

    // Hashtag.create({
    //     text : "diwali tweet",
    //     tweets: ['64cdf99f5dc39d695ea0f818']
    // })

    // const tweetRipo = new TweetRipository();
    // let tweet = await tweetRipo.getTweet('64cdf99f5dc39d695ea0f818');
    // console.log(tweet);
    
})

