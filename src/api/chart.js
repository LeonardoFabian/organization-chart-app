import { ENV } from "@/utils/constants";
import { flattenAttributes } from "@/utils/flattenAttributes";
import qs from "qs";

const chartQuery = qs.stringify({
  populate: {
    file: {
      fields: ["url", "alternativeText"],
    },
    nodes: {
      populate: {
        image: {
          fields: ["url", "alternativeText"],
        },
        childs: {
          populate: true,
        },
      },
    },
  },
});

export class Chart {
  async find() {
    const baseUrl = `${ENV.API_URL}/`;
    const path = `${ENV.ENDPOINTS.CHARTS}`;

    const url = new URL(path, baseUrl);
    url.search = chartQuery;

    try {
      const response = await fetch(url.href, { cache: "no-store" });
      const result = await response.json();

      const data = flattenAttributes(result);

      if (response.status !== 200) throw data;

      return data;
    } catch (error) {
      throw error;
    }
  }
}
