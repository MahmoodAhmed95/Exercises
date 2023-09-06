import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App component", () => {
  render(<App />);
  const linkElement = screen.getByText(/React Testing/i);
  expect(linkElement).toBeInTheDocument();
});
