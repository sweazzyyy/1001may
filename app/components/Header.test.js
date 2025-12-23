// components/Header.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { useCart } from './CartContext';
import Cookies from 'js-cookie';

// === МОКИ ===
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

jest.mock('./CartContext', () => ({
  useCart: jest.fn(),
}));

// Мок для Cookies: возвращаем токен только для ключа 'auth_token'
let mockAuthToken = null;
jest.mock('js-cookie', () => ({
  get: (key) => (key === 'auth_token' ? mockAuthToken : undefined),
}));

// Мок fetch, чтобы избежать ошибок при рендере
global.fetch = jest.fn().mockResolvedValue({
  ok: true,
  json: async () => ({}),
});

// === ТЕСТЫ ===
describe('Header', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockAuthToken = null;
    useCart.mockReturnValue({ cart: [], totalCost: 0 });
  });

  test('показывает "Войти", если пользователь не авторизован', () => {
    render(<Header />);
    expect(screen.getByText('Войти')).toBeInTheDocument();
    expect(screen.queryByText('Личный кабинет')).not.toBeInTheDocument();
    expect(screen.queryByText('Выйти')).not.toBeInTheDocument();
  });

  test('показывает "Личный кабинет" и "Выйти", если авторизован', () => {
    mockAuthToken = 'fake_token_123';
    useCart.mockReturnValue({ cart: [{ id: 1 }], totalCost: 500 });
    render(<Header />);
    expect(screen.getByText('Личный кабинет')).toBeInTheDocument();
    expect(screen.getByText('Выйти')).toBeInTheDocument();
    expect(screen.queryByText('Войти')).not.toBeInTheDocument();
  });

  test('открывает форму входа при клике на "Войти"', () => {
    render(<Header />);
    fireEvent.click(screen.getByText('Войти'));
    expect(screen.getByText('Вход')).toBeInTheDocument();
  });

  test('закрывает форму по крестику', () => {
    render(<Header />);
    fireEvent.click(screen.getByText('Войти'));
    fireEvent.click(screen.getByText('×'));
    expect(screen.queryByText('Вход')).not.toBeInTheDocument();
  });

  test('закрывает форму при клике вне окна', () => {
    render(<Header />);
    fireEvent.click(screen.getByText('Войти'));
    fireEvent.mouseDown(document.body);
    expect(screen.queryByText('Вход')).not.toBeInTheDocument();
  });
});