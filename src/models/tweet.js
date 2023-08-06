import mongoose  from "mongoose";
import { ObjectId } from "bson";

const tweetSchema = new mongoose.Schema({
    content : {
        type : String
    },
    likes : {
        type : Number
    },
    noOfTweets : {
        type : Number
    },
    comments : {
        type : String
    }

});

const Tweet = mongoose.model("Tweet" , tweetSchema);

export default Tweet;