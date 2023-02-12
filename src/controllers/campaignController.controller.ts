import { getCampaignsFiltered } from "../services/campaignService.service";
import { Campaign } from "../types/campaign";

async function getCampaigns(req, res, next) {
  try {
    const filter: string = req.path.sortBy;
    const sortDirection: string = req.path.sortDirection;

    const campaigns: Array<Campaign> = await getCampaignsFiltered(
      filter,
      sortDirection
    );

    res.json(campaigns);
  } catch (err) {
    console.error("campaignController/getCampaigns - error", err);
    next(err);
  }
}

module.exports = {
  getCampaigns
};
