import { podcastModel } from "./podcast-model";

export interface FilterTransferModel{
    statusCode:number;
    body:podcastModel[];
}