import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import App from "./App";

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
