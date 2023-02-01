import { useEffect, useState } from "react";
import { client } from "../client";
import { FeatureToggle, Flags } from "./types";

export function useFeatureToggle(): FeatureToggle {
  const [data, setData] = useState<Flags>();

  console.log("data", data);

  useEffect(() => {
    if (!data) {
      client
        .get("http://127.0.0.1:40605/")
        .then((response) => setData(response.data))
        .catch((error) => console.error(error));
    }

    return;
  }, [data]);

  return {
    flags: data ?? [],
  };
}
