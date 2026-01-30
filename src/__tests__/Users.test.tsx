import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

import Users from "@/pages/users/users";
import { getAllUsers } from "@/api/user";
import { mockUsers } from "./mock/users";

vi.mock("@/api/user", () => ({
  getAllUsers: vi.fn(),
}));

// Helper to render Users page with router
const renderUsersPage = () =>
  render(
    <BrowserRouter>
      <Users />
    </BrowserRouter>
  );

describe("Users page", () => {
  it("renders users when API returns data (positive)", async () => {
    vi.mocked(getAllUsers).mockResolvedValueOnce(mockUsers);

    renderUsersPage();

    expect(await screen.findByText("John")).toBeInTheDocument();
    expect(screen.getByText("Jane")).toBeInTheDocument();
  });

  it("handles empty users response safely (negative)", async () => {
    vi.mocked(getAllUsers).mockResolvedValueOnce([]);

    renderUsersPage();

    // Page should still render without crashing
    expect(await screen.findByText(/users/i)).toBeInTheDocument();
  });

  it("filters users by username (positive)", async () => {
    vi.mocked(getAllUsers).mockResolvedValueOnce(mockUsers);

    renderUsersPage();

    const usernameInput = await screen.findByLabelText(/username/i);
    await userEvent.type(usernameInput, "John");

    const filterButton = screen.getByRole("button", { name: /filter/i });
    await userEvent.click(filterButton);

    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.queryByText("Jane")).not.toBeInTheDocument();
  });

  it("shows no users when filter matches nothing (negative)", async () => {
    vi.mocked(getAllUsers).mockResolvedValueOnce(mockUsers);

    renderUsersPage();

    const usernameInput = await screen.findByLabelText(/username/i);
    await userEvent.type(usernameInput, "ghost");

    const filterButton = screen.getByRole("button", { name: /filter/i });
    await userEvent.click(filterButton);

    expect(screen.queryByText("John")).not.toBeInTheDocument();
    expect(screen.queryByText("Jane")).not.toBeInTheDocument();
  });

  it("changes page when pagination is clicked (positive)", async () => {
    vi.mocked(getAllUsers).mockResolvedValueOnce(
      Array.from({ length: 15 }, (_, i) => ({
        ...mockUsers[0],
        id: String(i),
        username: `user-${i}`,
      }))
    );

    renderUsersPage();

    // First page user
    expect(await screen.findByText("user-0")).toBeInTheDocument();

    const page2Button = screen.getByRole("button", { name: "2" });
    await userEvent.click(page2Button);

    // User from next page
    expect(await screen.findByText("user-10")).toBeInTheDocument();
  });
});
