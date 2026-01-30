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
    // table should render, but no user rows should exist
    const rows = await screen.findAllByRole("row");

    // 1 header row, no data rows
    expect(rows.length).toBe(1);
  });

  it("filters users by username (positive)", async () => {
    vi.mocked(getAllUsers).mockResolvedValueOnce(mockUsers);

    renderUsersPage();

    // test fails without this - popover filtet needs to be opened first
    const filterTrigger = await screen.findAllByRole("button", {
      name: /filter/i,
    });
    await userEvent.click(filterTrigger[0]);

    const usernameInput = await screen.findByLabelText(/username/i);
    await userEvent.type(usernameInput, "John");

    const filterButtons = screen.getAllByRole("button", { name: /filter/i });
    const applyButton = filterButtons[filterButtons.length - 1];
    await userEvent.click(applyButton);

    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.queryByText("jane")).not.toBeInTheDocument();
  });

  it("shows no users when filter matches nothing (negative)", async () => {
    vi.mocked(getAllUsers).mockResolvedValueOnce(mockUsers);

    renderUsersPage();

    // open the filter popover
    const filterTrigger = await screen.findAllByRole("button", {
      name: /filter/i,
    });
    await userEvent.click(filterTrigger[0]);

    const usernameInput = await screen.findByLabelText(/username/i);
    await userEvent.type(usernameInput, "ghost");

    const filterButtons = screen.getAllByRole("button", { name: /filter/i });
    const applyButton = filterButtons[filterButtons.length - 1];

    await userEvent.click(applyButton);

    expect(screen.queryByText("john")).not.toBeInTheDocument();
    expect(screen.queryByText("jane")).not.toBeInTheDocument();
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
