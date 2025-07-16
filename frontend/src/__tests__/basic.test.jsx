import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

function TestComponent() {
  return <h1>Hello, world!</h1>;
}

describe('TestComponent', () => {
  it('renders greeting', () => {
    render(<TestComponent />);
    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
  });
});