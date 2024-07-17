import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("button", () => {
  test("should render", () => {
    render(<Button>hi</Button>);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});
