import { PlaceOrVirtualLocation } from "../../domain/entities/place-or-virtual-location";
import { GetEventByIdPlaceOrVirtualLocation } from "../models/get-event-by-id-response-body";
import { GetEventByIdPlaceResponseBodyMapper } from "./get-event-by-id-place-response-body.mapper";
import { GetEventByIdVirtualLocationResponseBodyMapper } from "./get-event-by-id-virtual-location-response-body.mapper";

export namespace GetEventByIdPlaceOrVirtualLocationMapper {
    export function toPlaceOrVirtualLocationArray(model: GetEventByIdPlaceOrVirtualLocation | GetEventByIdPlaceOrVirtualLocation[]): PlaceOrVirtualLocation[] | undefined {
        let location: PlaceOrVirtualLocation[];
        
        if (Array.isArray(model)) {
            location = [];
      
            for (const item of model) {
              switch (item["@type"]) {
                case "Place": 
                  let tempLocation = GetEventByIdPlaceResponseBodyMapper.toPlace(item);
      
                  if (tempLocation === undefined) { 
                    console.warn(`failed to map model to domain: ${item}`);
                    break;
                }
      
                  location.push(tempLocation);
                  break;
                case "VirtualLocation": {
                  let tempLocation = GetEventByIdVirtualLocationResponseBodyMapper.toVirtualLocation(item);

                  if (tempLocation === undefined) {
                    console.warn(`failed to map model to domain: ${item}`);
                    break;
                  }

                  location.push(tempLocation);
                  break;
                }
                default:
                  break;
              }
            }
          } else {
            switch (model['@type']) {
              case "Place": {
                const tempLocation = GetEventByIdPlaceResponseBodyMapper.toPlace(model);
      
                if (tempLocation === undefined) {
                    console.warn(`failed to map model to domain: ${model}`);
                    return undefined 
                }
      
                location = [];
                location.push(tempLocation);
      
                break;
              }

              case "VirtualLocation": {
                const tempLocation = GetEventByIdVirtualLocationResponseBodyMapper.toVirtualLocation(model);

                if (tempLocation === undefined) {
                    console.warn(`failed to map model to domain: ${model}`);
                    return undefined;
                }

                location = [];
                location.push(tempLocation);
                break;
              }
              
              default:
                return undefined;
            }
          }

          return location;
    }
}