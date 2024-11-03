import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown component", () => {
  const title = "Test Title";
  const contentText = "This is the dropdown content";

  test("renders the title", () => {
    render(<Dropdown title={title}>{contentText}</Dropdown>);

    // Check if the title is rendered
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test("toggles content visibility on click", () => {
    render(<Dropdown title={title}>{contentText}</Dropdown>);

    // Content should be hidden initially
    expect(screen.queryByText(contentText)).not.toBeInTheDocument();

    // Click to open dropdown
    fireEvent.click(screen.getByText(title));
    expect(screen.getByText(contentText)).toBeInTheDocument();

    // Click again to close dropdown
    fireEvent.click(screen.getByText(title));
    expect(screen.queryByText(contentText)).not.toBeInTheDocument();
  });

  test("displays the correct icon based on isOpen state", () => {
    render(<Dropdown title={title}>{contentText}</Dropdown>);

    // Initial icon should be "▼" (closed state)
    expect(screen.getByText("▼")).toBeInTheDocument();

    // Click to open dropdown
    fireEvent.click(screen.getByText(title));

    // Icon should change to "▲" (open state)
    expect(screen.getByText("▲")).toBeInTheDocument();
  });
});
