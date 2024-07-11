import { screen, render } from "@testing-library/react";
import PlanetDetail from "./PlanetDetail";
import { describe, it } from "vitest";
import { act } from "react";

describe("<PlanetDetail />", () => {
  it("renders the title", () => {
    act(() => {
      render(<PlanetDetail />);
    });

    expect(screen.getByText("PlanetDetail")).toBeInTheDocument();
  });
});
