import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from ".";

jest.mock("react-icons/md", () => ({
  MdOutlineWaves: () => <div data-testid="wave-icon">Wave Icon</div>,
  MdStarOutline: () => <div data-testid="star-outline-icon">Star Outline Icon</div>,
  MdStar: () => <div data-testid="star-icon">Star Icon</div>,
}));

jest.mock("../button", () => ({
  Button: ({ buttonText }: { buttonText: string }) => (
    <button>{buttonText}</button>
  ),
}));

describe("Card Component", () => {
  const defaultProps = {
    cardName: "Test Card",
    cardText: "This is a test card with some description text.",
    cardDate: "2024-12-10",
    isStarActive: false,
  };

  it("renders the card with correct text and icons", () => {
    render(<Card {...defaultProps} />);
    
    // Check for card name and date
    expect(
      screen.getByText(`${defaultProps.cardName} • ${defaultProps.cardDate}`)
    ).toBeInTheDocument();

    // Check for card text
    expect(screen.getByText(defaultProps.cardText)).toBeInTheDocument();

    // Check for wave icon
    expect(screen.getByTestId("wave-icon")).toBeInTheDocument();

    // Check for star outline icon (initial state)
    expect(screen.getByTestId("star-outline-icon")).toBeInTheDocument();

    // Check for buttons
    expect(screen.getByText("Download")).toBeInTheDocument();
    expect(screen.getByText("View")).toBeInTheDocument();
  });

  it("renders truncated text if cardText is longer than 125 characters", () => {
    const longText =
      "This is a very long description text that exceeds 125 characters. It should be truncated with an ellipsis at the end.";
    render(<Card {...defaultProps} cardText={longText} />);
    
    expect(screen.getByText(/This is a very long description text that exceeds 125 characters\.\.\./)).toBeInTheDocument();
  });

  it("toggles the star icon when clicked", () => {
    render(<Card {...defaultProps} />);
    
    // Check initial state (star outline)
    const starOutlineIcon = screen.getByTestId("star-outline-icon");
    expect(starOutlineIcon).toBeInTheDocument();

    // Click the star icon
    fireEvent.click(starOutlineIcon);

    // Check for updated state (filled star)
    expect(screen.queryByTestId("star-outline-icon")).not.toBeInTheDocument();
    expect(screen.getByTestId("star-icon")).toBeInTheDocument();

    // Click again to toggle back
    fireEvent.click(screen.getByTestId("star-icon"));
    expect(screen.getByTestId("star-outline-icon")).toBeInTheDocument();
  });

  it("renders correctly when isStarActive is true", () => {
    render(<Card {...defaultProps} isStarActive={true} />);

    // Check that the filled star is rendered
    expect(screen.getByTestId("star-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("star-outline-icon")).not.toBeInTheDocument();
  });
});
