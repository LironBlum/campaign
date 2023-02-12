import {
  getCampaignsDataById,
  getCampaignsStatusById
} from "../providers/campaignApi.provider";
import { getCampaigns as getDBCampaigns } from "../providers/campaignDB.provider";
import { Campaign } from "../types/campaign";
import { parseCampaign } from "../utilities/campaign";
import { db_default_campaign_limit } from "../../campaignDbTable.json";

export async function getCampaignsFiltered(
  filter: string,
  sortDirection: string
): Promise<Array<Campaign>> {
  try {
    //TODO add validation func for filter options and sortdirection
    //support limit

    const dbCampaings = getDBCampaigns(db_default_campaign_limit);

    const campaignIds = []; //todo get all ids from db obj

    const apiCampaignData: Array<object> = await Promise.all(
      getCampaignsStatusById(campaignIds),
      getCampaignsDataById(campaignIds)
    );

    const consolidatedCampians = [];

    const parsed: Array<Campaign> = parseCampaign(consolidatedCampians);
    return parsed;
  } catch (err) {
    console.error("campaignService/getCampaignsFiltered - error", err);
    throw err;
  }
}
