import { useEffect, useState } from "react";
import { client } from "../client";
import { FeatureFlagsData, FeatureToggle, Flags } from "./types";

export function useFeatureToggle(): FeatureToggle {
  const [data, setData] = useState<FeatureFlagsData>();

  async function getFlags() {
    client
      .get("flags")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    if (!data) {
      getFlags();
    }

    return;
  }, [data]);

  const flags: Flags = data
    ? data?.data.map((feature) => feature.flag)
    : ([] as Flags);

  return {
    flags,
    getFlags,
  };
}
