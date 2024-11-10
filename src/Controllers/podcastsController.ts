
import {serviceListEpisodes} from "../Services/list-episodes-service"
import { serviceFilterEpisodes } from "../Services/filter-episodes";
import * as http from "http";
import { ContentType } from "../utils/Content-type";
import { FilterTransferModel } from "../models/filterPodcastModel";


export const getListEpisodes = async (request:http.IncomingMessage,response:http.ServerResponse)=>{

    const content:FilterTransferModel = await serviceListEpisodes();
        response.writeHead(content.statusCode,{"Content-type":ContentType.json});
        response.write(JSON.stringify(content.body))
        response.end();
};

export const getFilterEpisodes = async (request:http.IncomingMessage,response:http.ServerResponse)=>{

       


    const filterContent :FilterTransferModel = await serviceFilterEpisodes(request.url);
    response.writeHead(filterContent.statusCode,{"Content-type":ContentType.json});
    response.write(JSON.stringify(filterContent.body));
    response.end();
}