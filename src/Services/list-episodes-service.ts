
import { FilterTransferModel } from "../models/filterPodcastModel";
import { repositoryPodcast } from "../repositories/podcast-repository";
import { HttpStatusCode } from "../utils/StatusCode";



export const serviceListEpisodes = async ():Promise<FilterTransferModel>=>{

    let responseFormat:FilterTransferModel = {
        statusCode:0,
        body:[],
    }
    const data = await repositoryPodcast();

    responseFormat = {
        statusCode:data.length !== 0? HttpStatusCode.OK:HttpStatusCode.NoContent,
        body:data,
    }
 

        return responseFormat;
}