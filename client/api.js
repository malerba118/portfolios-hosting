import axios from "axios";
import { getAppUrl } from "shared/utils/url";

export const portfolio = {
  contact: async (portfolioId, data, { useDraft = false } = {}) => {
    const res = await axios.post(
      `${getAppUrl()}/api/portfolios/${portfolioId}/email`,
      {
        ...data,
        useDraft,
      }
    );
    return res.data;
  },
};
