import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/Header";


test("Test name appear in header", () =>{
    render(<MemoryRouter>
        <Header/>
    </MemoryRouter>);

    const text = screen.getByText(/Yuvaraj E/);
    expect(text).toBeInTheDocument();
});

test("NavLink applies active class when route matches", () => {
  render(
    <MemoryRouter initialEntries={["/contact"]}>
      <Header />
    </MemoryRouter>
  );

  const activeLinks = screen.getAllByRole("link", {
    current: "page",
  });

  // Check at least one active link has the active class
  expect(
    activeLinks.some(link =>
      link.classList.contains("bg-orange-400")
    )
  ).toBe(true);
});

test("Menu opens and closes when toggle button is clicked", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const toggleButton = screen.getByLabelText(/toggle menu/i);
  const mobileMenu = screen.getByTestId("mobile-menu");

  // closed
  expect(mobileMenu).toHaveClass("max-h-0");

  // open
  fireEvent.click(toggleButton);
  expect(mobileMenu).toHaveClass("max-h-72");

  // close
  fireEvent.click(toggleButton);
  expect(mobileMenu).toHaveClass("max-h-0");
});
