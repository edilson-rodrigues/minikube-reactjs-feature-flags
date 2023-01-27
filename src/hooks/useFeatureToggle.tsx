export function useFeatureToggle() {
  const features = ["@active-component", "@inactive-component"];

  return {
    isFeatureEnabled: features,
  };
}
