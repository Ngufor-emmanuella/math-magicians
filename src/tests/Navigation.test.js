import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../components/Navigation';

describe('properly renders links', () => {
  it('renders all links properly', () => {
    render(
      <Router>
        <Navigation />
      </Router>,
    );
  });

  test('render Home Page', () => {
    render(
      <Router>
        <Navigation />
      </Router>,
    );

    fireEvent.click(screen.getByText('Home'));
  });

  it('renders calaculator ', () => {
    render(
      <Router>
        <Navigation />
      </Router>,
    );
    fireEvent.click(screen.getByText('Calculator'));
  });

  it('renders quote ', () => {
    render(
      <Router>
        <Navigation />
      </Router>,

    );
    fireEvent.click(screen.getByText('Quotes'));
  });
});
