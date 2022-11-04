import { describe, expect, it } from 'vitest';
import { mockSearch } from '../mock';
import { render, screen } from '../utils/test-utils';
import VideosList from './VideosList';

describe('VideosList test', () => {
  it('the video title is visible', () => {
    render(<VideosList videos={mockSearch} />);
    expect(screen.getByText(/Chcę pracować w GoGoApps/)).toBeInTheDocument();
  });

  it('renders empty list', () => {
    render(<VideosList videos={[]} />);
    expect(screen.getByText(/Nothing found/)).toBeInTheDocument();
  });
});
