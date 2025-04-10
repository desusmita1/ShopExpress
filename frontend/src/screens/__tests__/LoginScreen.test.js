//test for login screen
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import LoginScreen from '../LoginScreen';
import store from '../../store';
import { useLoginMutation } from '../../slices/usersApiSlice';

// Mock the useLoginMutation hook
jest.mock('../../slices/usersApiSlice', () => ({
    useLoginMutation: jest.fn(() => [
        jest.fn().mockResolvedValue({ data: { token: 'mockToken' } }),
        { isLoading: false }
    ]),
}));

beforeEach(() => {
  jest.clearAllMocks(); // Clear mocks before each test
});

test('renders login form', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <LoginScreen />
      </MemoryRouter>
    </Provider>
  );

  // Assert that the login form is rendered on the screen
  expect(screen.getByPlaceholderText(/enter email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/enter password/i)).toBeInTheDocument();
//   expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
}
);