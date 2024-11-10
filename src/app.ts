
import { getFilterEpisodes, getListEpisodes } from "./Controllers/podcastsController";
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/http-methods";
import * as http from "http";

export const app = 
async (request:http.IncomingMessage,response:http.ServerResponse)=>{

    const [baseUrl,queryString ] = request.url?.split("?") ?? ["",""];
    console.log(baseUrl);
    console.log(queryString);
  
    
  
      if(request.method === HttpMethods.GET && baseUrl === Routes.LIST){
        await getListEpisodes(request,response);
      }
      if(request.method === HttpMethods.GET && baseUrl === Routes.EPISODE){
        await getFilterEpisodes(request,response);
      }
      
  }