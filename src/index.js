import express from "express";
import {connect} from "./config/database.js";
import router from "./routes/index.js";
const app = new express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api", router);

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

