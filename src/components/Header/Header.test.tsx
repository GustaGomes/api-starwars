import { screen, render } from "@testing-library/react";
import { describe, it } from "vitest";
import { act } from "react";
import HeaderComponent from "./Header";

describe("<HeaderComponent />", () => {
  it("renders the title", () => {
    act(() => {
      render(<HeaderComponent />);
    });

    expect(screen.getByText("HeaderComponent")).toBeInTheDocument();
  });
});
