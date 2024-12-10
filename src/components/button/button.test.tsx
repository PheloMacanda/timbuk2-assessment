import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides custom matchers like "toBeInTheDocument"
import { Button } from '.';

describe('Button Component', () => {
  it('renders the button with the correct text', () => {
    render(<Button buttonText="Click Me" variant="primary" />);
    const button = screen.getByText('Click Me');
    expect(button).toBeInTheDocument(); // Asserts the button is rendered
  });

  it('applies the correct class for the primary variant', () => {
    render(<Button buttonText="Primary Button" variant="primary" />);
    const button = screen.getByText('Primary Button');
    expect(button).toHaveClass('primary-btn'); // Asserts the correct class is applied
  });

  it('applies the correct class for the secondary variant', () => {
    render(<Button buttonText="Secondary Button" variant="secondary" />);
    const button = screen.getByText('Secondary Button');
    expect(button).toHaveClass('secondary-btn'); // Asserts the correct class is applied
  });

  it('renders with dynamic text content', () => {
    const dynamicText = "Dynamic Text";
    render(<Button buttonText={dynamicText} variant="primary" />);
    const button = screen.getByText(dynamicText);
    expect(button).toBeInTheDocument(); // Asserts the button renders dynamic content
  });
});
