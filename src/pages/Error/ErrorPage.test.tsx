import { screen, render } from "@testing-library/react";
import ErrorPage from "./ErrorPage";
import { describe, it } from "vitest";
import { act } from "react";

describe("<ErrorPage />", () => {
  it("renders the title", () => {
    act(() => {
      render(<ErrorPage />);
    });

    expect(screen.getByText("ErrorPage 404!")).toBeInTheDocument();
  });
});
