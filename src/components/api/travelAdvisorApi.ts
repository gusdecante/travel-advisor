import axios from "axios";
import { Coords } from "google-map-react";
import { Place } from "../../App";

// interface GetPlaceDataProps {
//   type: string;
//   sw: Coords;
//   ne: Coords;
// }

export const getPlaceData = async (
  type: string,
  sw: Coords,
  ne: Coords
): Promise<Place[]> => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key":
            "db182f9a64mshb820892725422fap1ffa58jsna16b64dd1fb0",
        },
      }
    );
    return data;
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};
