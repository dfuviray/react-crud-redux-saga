import * as type from "../types";

export function getLocations(locations) {
  return {
    type: type.ADD_DATA,
    payload: locations,
  };
}
