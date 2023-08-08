import TweetRipository from "../repository/tweet-repository.js";
import HashtagRipository from "../repository/hashtag-repository.js";

class TweetService {
    constructor(){
        this.tweetRipository = TweetRipository;
        this.hashtagRipository = HashtagRipository;

    }

    async create(data){

        const content = data;
        let tags = content.match((/#+[a-zA-Z0-9(_)]+/g)).
        map((tag) => tag.substring(1).toLowerCase());

        //storing a tweet 
        const tweet = await this.tweetRipository.create(data);

        //storing the hashtag
        let alreadyPresntTags = await this.hashtagRipository.getHashtagByName(tags);
        let textOfPresentTags = alreadyPresntTags.map(tags => tags.text);
        let newTags = tags.filter(tag => !textOfPresentTags.includes(tag));

        newTags = newTags.map(tag => {
            return{
                text : tag,
                tweets : [tweet.id]
            }
        })
        await this.hashtagRipository.bulkCreate(newTags);
        alreadyPresntTags.forEach((tag)=>{
            tag.tweet.push(tweet.id);
            tag.save();
        })
        return tweet;
    }

    async getTweet(tweetId){
        const tweet = await this.tweetRipository.getTweet(tweetId);
        return tweet;
    }
}

export default TweetService;