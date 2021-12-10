import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../Components/Navbar/Navbar";

const items = ["my Account", "Search"];

describe("testando componente navbar", () => {
  test("titulo Logo", () => {
    render(<Navbar />);
    const header = screen.getByRole("heading", { name: /^shop$/i });
    expect(header).toBeInTheDocument();
  });

  test("items menu não aparecendo", () => {
    render(<Navbar />);
    expect(screen.queryByText(items[0])).not.toBeInTheDocument();
    expect(screen.queryByText(items[1])).not.toBeInTheDocument();
    expect(screen.queryByTestId("shoppin-card-icon")).not.toBeInTheDocument();
  });

  test("abrindo dropdown", () => {
    render(<Navbar />);

    const dropdown = screen.getByRole("button", { expanded: true });
    fireEvent.click(dropdown);

    expect(screen.getByText(items[0])).toBeInTheDocument();
    expect(screen.getByText(items[1])).toBeInTheDocument();
    expect(screen.getByTestId("shoppin-card-icon")).toBeInTheDocument();
  });

  test("fechar dropdown", () => {
    render(<Navbar />);

    const dropdown = screen.getByRole("button", { expanded: true });
    fireEvent.doubleClick(dropdown);

    expect(screen.queryByText(items[0])).not.toBeInTheDocument();
    expect(screen.queryByText(items[1])).not.toBeInTheDocument();
    expect(screen.queryByTestId("shoppin-card-icon")).not.toBeInTheDocument();
  });
});
