import * as type from "../types";

export function getLocations(locations) {
  return {
    type: type.GET_LOCATIONS,
    payload: locations,
  };
}
