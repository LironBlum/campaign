import { campaigns } from "../../campaignDbTable.json";

export const getCampaigns = (limit: number) => {
  //TODO check cache
  //set default limit
  //get by limit
  try {
    return campaigns;
  } catch (err) {
    console.error("campaignDBprovider/getCampaigns - error", err);
    throw err;
  }
};
