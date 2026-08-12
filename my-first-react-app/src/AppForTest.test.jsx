import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import userEvent from "@testing-library/user-event";
import { App, Input } from "./AppForTest";

describe("App Component API Tests", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });
  it("loading text is shown while api is in progress", async () => {
    const mockUser = { name: "Jack", email: "jack@email.com" };

    vi.spyOn(globalThis, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockUser),
      }),
    );

    render(<App />);
    const loadingText = screen.getByText("Loading...");
    expect(loadingText).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
  });
  it("should fetch and render user data", async () => {
    const mockUser = { name: "Jack", email: "jack@email.com" };

    vi.spyOn(globalThis, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockUser),
      }),
    );

    render(<App />);

    const nameElement = await screen.findByRole("heading", { name: /jack/i });
    expect(nameElement).toBeInTheDocument();
  });
  it("shows error message when fetch fails", async () => {
    const error = new Error("API is down");
    vi.spyOn(globalThis, "fetch").mockImplementation(() =>
      Promise.reject(error),
    );
    render(<App />);
    const errorMessage = await screen.findByText("API is down");
    expect(errorMessage).toBeInTheDocument();
  });
});

describe("Counter component tests", () => {
  it("should increment counter", async () => {
    render(<App />);
    const counter = screen.getByTestId("counter");
    const incrementBtn = screen.getByRole("button", { name: /increment/i });
    await userEvent.click(incrementBtn);
    expect(counter).toHaveTextContent("1");
  });
  it("should decrement counter", async () => {
    render(<App />);
    const counter = screen.getByTestId("counter");
    const decrementBtn = screen.getByRole("button", { name: /decrement/i });
    await userEvent.click(decrementBtn);
    expect(counter).toHaveTextContent("-1");
  });
});
describe("input component tests", () => {
  it("should update input value", async () => {
    render(<App />);
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "hello");
    expect(input).toHaveValue("hello");
  });
  it("should call handleChange function every time input value changes", async () => {
    const mockOnChange = vi.fn();
    render(<Input handleChange={mockOnChange} inputValue="" />);
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "hello");
    expect(mockOnChange).toHaveBeenCalled(5);
  });
});
