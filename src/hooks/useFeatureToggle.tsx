import { useEffect, useState } from "react";
import { client } from "../client";
import { FeatureToggle, Flags } from "./types";

export function useFeatureToggle(): FeatureToggle {
  const [data, setData] = useState<Flags>();

  const url = "http://127.0.0.1:31001/";

  console.log("url", url);
  console.log("data", data);

  useEffect(() => {
    if (!data) {
      client
        .get(url)
        .then((response) => setData(response.data))
        .catch((error) => console.error(error));
    }

    return;
  }, [data]);

  return {
    flags: data ?? [],
  };
}
