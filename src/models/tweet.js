import mongoose  from "mongoose";
import { ObjectId } from "bson";

const tweetSchema = new mongoose.Schema({
    content : {
        type : String
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like'
        }
    ],
    noOfTweets : {
        type : Number
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],

});

const Tweet = mongoose.model("Tweet" , tweetSchema);

export default Tweet;