import Hashtag from "../models/hashtag.js";
import CrudRepository from "./crud-repository.js";

class HashtagRepository extends CrudRepository{

    constructor(){
        super(Hashtag);
    }

    async create(data){
        try {
            const hashtag = await Hashtag.create(data);
            return hashtag;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    //for multiple creation of hashtags 
    async bulkCreate(data){
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    // get hashtag by name 
    async findByName(text){
        try {
            const hashtag = await Hashtag.find({
                text : text
            });
            return hashtag;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    async getHashtag(id){
        try {
            const hashtag = await Hashtag.findById(id);
            return hashtag;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteHashtag(id){
        try {
            const hashtag = await Hashtag.deleteOne(id);
            return hashtag;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

export default HashtagRepository;

