import fs  = require("fs");
import path  = require("path")
import { podcastModel } from "../models/podcast-model";



const pathData = path.join(__dirname,"../repositories/podcasts.json");


export const repositoryPodcast = async(podcasName?:string):Promise<podcastModel[]>=>{
    const language = "utf-8";
    const rawData = fs.readFileSync(pathData,language);
    let jsonFile = JSON.parse(rawData);

    if(podcasName){
        jsonFile  = jsonFile.filter((podcast:podcastModel)=> podcast.podcasName === podcasName);
    }


    return jsonFile;
}


