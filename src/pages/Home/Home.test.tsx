import { screen, render } from "@testing-library/react";
import Login from "./Home";
import { describe, it } from "vitest";
import { act } from "react";

describe("<Login />", () => {
  it("renders the title", () => {
    act(() => {
      render(<Login />);
    });

    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});
