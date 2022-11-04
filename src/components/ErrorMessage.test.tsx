import { describe, expect, it } from 'vitest';
import { render, screen } from '../utils/test-utils';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage test', () => {
  it('the error message is visible', () => {
    render(<ErrorMessage />);
    expect(screen.getByText(/Something went wrong!/)).toBeInTheDocument();
  });

  it('the custom error message is visible', () => {
    render(<ErrorMessage text="Video not found" />);
    expect(screen.getByText(/Video not found/)).toBeInTheDocument();
  });
});
