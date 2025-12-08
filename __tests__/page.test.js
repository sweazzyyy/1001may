// __tests__/page.test.js
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home Page', () => {
  it('renders welcome message and login link', () => {
    render(<Home />);

    expect(screen.getByText(/добро пожаловать/i)).toBeInTheDocument();
    expect(screen.getByText(/это сайт 1001may/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /войти/i })).toHaveAttribute('href', '/login');
  });
});