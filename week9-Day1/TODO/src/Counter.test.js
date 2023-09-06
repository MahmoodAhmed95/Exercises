import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("renders initial count of zero", () => {
  render(<Counter />);
  const countElement = screen.getByText(/count: 0/i);
  expect(countElement).toHaveTextContent("Count: 0");
});

test("renders Counetr", () => {
  render(<Counter />);
  const heading = screen.getByRole("heading", { name: /Counter/i });
  expect(heading).toBeInTheDocument();
});

test("increments count when increment button is clicked", () => {
  render(<Counter />);
  const countElement = screen.getByText(/count: 0/i);
  const incrementButton = screen.getByText(/increment/i);

  fireEvent.click(incrementButton);

  expect(countElement).toHaveTextContent("Count: 1");
});

test("decrements count when decrement button is clicked", () => {
  render(<Counter />);
  const countElement = screen.getByText(/count: 0/i);
  const decrementButton = screen.getByText(/decrement/i);

  fireEvent.click(decrementButton);

  expect(countElement).toHaveTextContent("Count: -1");
});
