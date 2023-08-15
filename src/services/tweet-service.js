import TweetRepository from "../repository/tweet-repository.js";
import HashtagRepository from "../repository/hashtag-repository.js";

class TweetService {
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data){

        const content = data.content;
        let tags = content.match((/#+[a-zA-Z0-9(_)]+/g)).
        map((tag) => tag.substring(1).toLowerCase());

        //storing a tweet 
        const tweet = await this.tweetRepository.create(data);

        //storing the hashtag
        let alreadyPresntTags = await this.hashtagRepository.getHashtagByName(tags);
        let textOfPresentTags = alreadyPresntTags.map(tags => tags.text);
        let newTags = tags.filter(tag => !textOfPresentTags.includes(tag));

        newTags = newTags.map(tag => {
            return{
                text : tag,
                tweets : [tweet.id]
            }
        })
        await this.hashtagRepository.bulkCreate(newTags);
        alreadyPresntTags.forEach((tag)=>{
            tag.tweet.push(tweet.id);
            tag.save();
        })
        return tweet;
    }

    async getTweet(tweetId){
        const tweet = await this.tweetRepository.getTweet(tweetId);
        return tweet;
    }
}

export default TweetService;