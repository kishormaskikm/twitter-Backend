import Tweet from "../models/tweet.js";
import mongoose from "mongoose";



class TweetRipository {

    async create(data){
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllTweets(){
        try {
            const tweets = await Tweet.find({});
            return tweets;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getTweet(id){
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteTweet(id){
        try {
            const tweet = await Tweet.deleteOne(id);
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async deleteAllTweet(){
        try {
            const tweet = await Tweet.deleteMany();
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

export default TweetRipository;

