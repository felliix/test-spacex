import { gql } from "graphql-request";
import request from "./api";

const querySpaceXList = (limit: number, offset: number) => gql`
{
  launchesPast(
    limit: ${limit},
    offset: ${offset}
  ) {
    id
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      video_link
    }
    rocket {
      rocket_name
      first_stage {
        cores {
          flight
          core {
            reuse_count
            status
          }
        }
      }
      second_stage {
        payloads {
          payload_type
          payload_mass_kg
          payload_mass_lbs
        }
      }
    }
    ships {
      name
      home_port
      image
    }
  }
}
`;

const querySpaceXSearchByMission = (keyword: string) => gql`
{
  launchesPast(
    find: {
      mission_name: "${keyword}",
    }
  ) {
    id
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      video_link
    }
    rocket {
      rocket_name
      first_stage {
        cores {
          flight
          core {
            reuse_count
            status
          }
        }
      }
      second_stage {
        payloads {
          payload_type
          payload_mass_kg
          payload_mass_lbs
        }
      }
    }
    ships {
      name
      home_port
      image
    }
  }
}
`;

const querySpaceXSearchByRocket = (keyword: string) => gql`
{
  launchesPast(
    find: {
      rocket_name: "${keyword}",
    }
  ) {
    id
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      video_link
    }
    rocket {
      rocket_name
      first_stage {
        cores {
          flight
          core {
            reuse_count
            status
          }
        }
      }
      second_stage {
        payloads {
          payload_type
          payload_mass_kg
          payload_mass_lbs
        }
      }
    }
    ships {
      name
      home_port
      image
    }
  }
}
`;

export const getSpaceXList = async (limit: number, offset: number) => {
  const response = await request(querySpaceXList(limit, offset));
  return response;
};

export const searchSpaceX = async (keyword: string) => {
  const [responseByMission, responseByRocket] = await Promise.all([
    request(querySpaceXSearchByMission(keyword)),
    request(querySpaceXSearchByRocket(keyword)),
  ]);
  const response = responseByMission.launchesPast.concat(
    responseByRocket.launchesPast
  );
  return response;
};
