import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("Make sure the counter value is 0 when loaded", () => {
  // Render component
  render(<Counter />);
  // Get element with counter text
  const countElement = screen.getByText(/count:/i);
  // Compare the expected text to actual text
  expect(countElement).toHaveTextContent("Count: 0");
});

test("Make sure the counter value is 0 when loaded", () => {
  // Render component
  const { getByText } = render(<Counter />);
  // Get element with counter text
  const countElement = getByText(/count:/i);
  // Compare the expected text to actual text
  expect(countElement).toHaveTextContent("Count: 0");
});

test("Make sure counter text element is present", () => {
  render(<Counter />);
  const heading = screen.getByRole("heading", { name: /Counter/i });
  expect(heading).toBeInTheDocument();
});

test("Increment counter when increase button is clicked", () => {
  render(<Counter />);
  const countElement = screen.getByText(/count: 0/i);
  const incrementButton = screen.getByText(/increment/i);

  fireEvent.click(incrementButton);

  expect(countElement).toHaveTextContent("Count: 1");
});

test("Decrement counter when decrease button is clicked", () => {
  render(<Counter />);
  const countElement = screen.getByText(/count: 0/i);
  const decrementButton = screen.getByText(/decrement/i);

  fireEvent.click(decrementButton);

  expect(countElement).toHaveTextContent("Count: -1");
});
