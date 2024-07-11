import { screen, render } from "@testing-library/react";
import { describe, it } from "vitest";
import { act } from "react";
import FooterComponent from "./Footer";

describe("<FooterComponent />", () => {
  it("renders the title", () => {
    act(() => {
      render(<FooterComponent />);
    });

    expect(screen.getByText("FooterComponent")).toBeInTheDocument();
  });
});
