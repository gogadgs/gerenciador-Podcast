import { FilterTransferModel } from "../models/filterPodcastModel";
import { repositoryPodcast } from "../repositories/podcast-repository";
import { HttpStatusCode } from "../utils/StatusCode";


export const serviceFilterEpisodes = async(podcasName:string | undefined):Promise<FilterTransferModel>=>{


        let responseFormat: FilterTransferModel = {
                statusCode : 0,
                body : [],
        }
        const queryString = podcasName?.split("?p=")[1] || "";
        const data = await repositoryPodcast(queryString);


        responseFormat.statusCode = data.length !==0 ? HttpStatusCode.OK : HttpStatusCode.NoContent;

       /*  if(data.length !== 0){
                responseFormat.statusCode  = HttpStatusCode.OK;
                
        }else{
                responseFormat.statusCode  = HttpStatusCode.NoContent;
        } */
        responseFormat.body = data;
        return responseFormat;
} 