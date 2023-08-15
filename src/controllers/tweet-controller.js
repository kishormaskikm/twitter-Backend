import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();

export const createTweet = async (req , res)=>{
    try {
        const data = req.body;
        const response = await tweetService.create(data);

        return res.status(201).json({
            success : true,
            message: "Tweets created successfully",
            result :response,
            err: {}
        });    
    } catch (error) {
        console.log(error);
        return res.status(201).json({
            success : false,
            message: "error encountred",
            result :{},
            err: error
        }); 
    }
}

export const getTweet = async (req , res)=>{
    try {
        const id = req.params.id;
        const response = await tweetService.getTweet(id);

        return res.status(201).json({
            success : true,
            message: "Tweets fetch successfully",
            result :response,
            err: {}
        });    
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            success : false,
            message: "error encountred",
            result :{},
            err: error
        }); 
    }
}