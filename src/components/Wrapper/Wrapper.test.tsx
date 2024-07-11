import { screen, render } from "@testing-library/react";
import WrapperComponent from "./Wrapper";
import { describe, it } from "vitest";
import { act } from "react";

describe("<WrapperComponent />", () => {
  it("renders the title", () => {
    act(() => {
      render(
        <WrapperComponent>
          <h1>WrapperComponent</h1>
        </WrapperComponent>
      );
    });

    expect(screen.getByText("WrapperComponent")).toBeInTheDocument();
  });
});
