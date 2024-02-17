import { screen, render } from "@testing-library/react";
import Start from ".";
import { describe, it } from "vitest";

describe("<Start />", () => {
  it("renders the title", () => {
    render(<Start />);

    expect(screen.getByText("Start")).toBeInTheDocument();
  });
});
