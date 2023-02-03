export interface FeatureFlagsData {
  message: string;
  data: [
    {
      id: number;
      flag: string;
    }
  ];
}

export type Flags = ReadonlyArray<string>;

export interface FeatureToggle {
  flags: Flags;
  getFlags?: () => void;
}
