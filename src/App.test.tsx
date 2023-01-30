import { render, screen } from "@testing-library/react";
import App from "./App";
import * as useFeatureToggleMock from "./hooks/useFeatureToggle";

describe("App", () => {
  test("renders this is the active component", () => {
    jest.spyOn(useFeatureToggleMock, "useFeatureToggle").mockReturnValue({
      flags: ["@active-component"],
      getFlags: jest.fn(),
    });

    render(<App />);

    const textElement = screen.getByText(/this is the active component/i);
    expect(textElement).toBeInTheDocument();
  });

  test("renders this is the inactive component", () => {
    jest.spyOn(useFeatureToggleMock, "useFeatureToggle").mockReturnValue({
      flags: ["@inactive-component"],
      getFlags: jest.fn(),
    });

    render(<App />);

    const textElement = screen.getByText(/this is the inactive component/i);
    expect(textElement).toBeInTheDocument();
  });
});
