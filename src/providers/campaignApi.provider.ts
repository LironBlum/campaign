import axios from "axios";
import {
  campaign_host,
  campaign_by_id_path,
  campaign_stats_path
} from "../../config.json";

export const getCampaignsDataById = async (ids: Array<string>) => {
  //TODO check cache
  try {
    //replace campaign_id with acctual id
    const campaigns = await axios.get(`${campaign_host}${campaign_by_id_path}`);
    return campaigns.data;
  } catch (err) {
    console.error("campaignApiProvider/getCampaignsDataById - error", err);
    throw err;
  }
};

export const getCampaignsStatusById = async (ids: Array<string>) => {
  //TODO check cache
  try {
    //replace campaign_id with acctual id
    const campaigns = await axios.get(`${campaign_host}${campaign_stats_path}`);
    return campaigns.data;
  } catch (err) {
    console.error("campaignApiProvider/getCampaignsStatusById - error", err);
    throw err;
  }
};
