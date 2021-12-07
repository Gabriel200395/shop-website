import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./Home";

describe("testando componente Home", () => {
  test("testando slide default", () => {
    render(<Home />);

    expect(screen.getByRole("button", { name: /next/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /prev/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /women/i })).toBeInTheDocument();
    expect(screen.getByText("$1000")).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: /s/i })).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: /m/i })).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: /l/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "-" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "+" })).toBeInTheDocument();
    expect(screen.getByRole("listitem", {name:"women"})).toBeInTheDocument()
    expect(screen.getByRole("listitem", {name:"women"})).toHaveClass("menu-item")
    expect(
      screen.getByRole("button", { name: "add to Cart" })
    ).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument(); 
  });

  test("funcionalidade slide next e prev", () => {
    render(<Home />);

    const buttonNext = screen.getByRole("button", { name: /next/i });
    fireEvent.click(buttonNext);

    const buttonIncrement = screen.getByRole("button", { name: "+" });
    const buttonDecrement = screen.getByRole("button", { name: "-" });

    expect(screen.getByRole("heading", { name: /men/i })).toBeInTheDocument();
    expect(screen.getByText("$2000")).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: /s/i })).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: /m/i })).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: /l/i })).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument(); 
    expect(screen.getByRole("listitem", {name:"men"})).toBeInTheDocument()
    expect(screen.getByRole("listitem", {name:"men"})).toHaveClass("menu-item")

    fireEvent.click(buttonIncrement);
    expect(screen.getByText("2")).toBeInTheDocument();

    fireEvent.click(buttonDecrement);
    expect(screen.getByText("1")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "add to Cart" })
    ).toBeInTheDocument();

    // segunda fase slide

    fireEvent.click(buttonNext);

    expect(screen.getByRole("heading", { name: /shoes/i })).toBeInTheDocument();
    expect(screen.getByText("$3000")).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: /s/i })).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: /m/i })).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: /l/i })).toBeInTheDocument();
    expect(screen.getByRole("listitem", {name:"shoes"})).toBeInTheDocument()
    expect(screen.getByRole("listitem", {name:"shoes"})).toHaveClass("menu-item")
    expect(screen.getByText("1")).toBeInTheDocument();

    fireEvent.click(buttonIncrement);
    expect(screen.getByText("1")).toBeInTheDocument();

    fireEvent.click(buttonDecrement);
    expect(screen.getByText("1")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "add to Cart" })
    ).toBeInTheDocument();

    // terceira fase slide

    fireEvent.click(buttonNext);

    expect(
      screen.getByRole("heading", { name: /Brand Sweatshirt/i })
    ).toBeInTheDocument();
    expect(screen.getByText("$4000")).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: /s/i })).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: /m/i })).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: /l/i })).toBeInTheDocument();
    expect(screen.getByRole("listitem", {name:"brand-sweatshirt"})).toBeInTheDocument()
    expect(screen.getByRole("listitem", {name:"brand-sweatshirt"})).toHaveClass("menu-item")
    expect(screen.getByText("1")).toBeInTheDocument(); 


    fireEvent.click(buttonIncrement);
    expect(screen.getByText("1")).toBeInTheDocument();

    fireEvent.click(buttonDecrement);
    expect(screen.getByText("1")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "add to Cart" })
    ).toBeInTheDocument();

    // voltando slide

    const buttonPrev = screen.getByRole("button", { name: /prev/i });
    fireEvent.click(buttonPrev);

    expect(screen.getByRole("heading", { name: /shoes/i })).toBeInTheDocument();
    expect(screen.getByText("$3000")).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: /s/i })).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: /m/i })).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: /l/i })).toBeInTheDocument(); 
    expect(screen.getByRole("listitem", {name:"shoes"})).toBeInTheDocument()
    expect(screen.getByRole("listitem", {name:"shoes"})).toHaveClass("menu-item")
    
    expect(screen.getByText("1")).toBeInTheDocument();

    fireEvent.click(buttonIncrement);
    expect(screen.getByText("1")).toBeInTheDocument();

    fireEvent.click(buttonDecrement);
    expect(screen.getByText("1")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "add to Cart" })
    ).toBeInTheDocument();

    // segunda fase

    fireEvent.click(buttonPrev);

    expect(screen.getByRole("heading", { name: /men/i })).toBeInTheDocument();
    expect(screen.getByText("$2000")).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: /s/i })).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: /m/i })).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: /l/i })).toBeInTheDocument();
    expect(screen.getByRole("listitem", {name:"men"})).toBeInTheDocument()
    expect(screen.getByRole("listitem", {name:"men"})).toHaveClass("menu-item")
    expect(screen.getByText("1")).toBeInTheDocument();

    fireEvent.click(buttonIncrement);
    expect(screen.getByText("1")).toBeInTheDocument();

    fireEvent.click(buttonDecrement);
    expect(screen.getByText("1")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "add to Cart" })
    ).toBeInTheDocument();

    // segunda primeira fase

    fireEvent.click(buttonPrev);

    expect(screen.getByRole("heading", { name: /women/i })).toBeInTheDocument();
    expect(screen.getByText("$1000")).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: /s/i })).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: /m/i })).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: /l/i })).toBeInTheDocument();
    expect(screen.getByRole("listitem", {name:"women"})).toBeInTheDocument()
    expect(screen.getByRole("listitem", {name:"women"})).toHaveClass("menu-item")
    expect(screen.getByText("1")).toBeInTheDocument(); 

    fireEvent.click(buttonIncrement);
    expect(screen.getByText("1")).toBeInTheDocument();

    fireEvent.click(buttonDecrement);
    expect(screen.getByText("1")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "add to Cart" })
    ).toBeInTheDocument();
  });
});
