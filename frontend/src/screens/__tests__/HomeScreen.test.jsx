import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import store from '../store';

// This test simulates the successful state (isLoading: false and data containing products) and ensures 
// that "Product 1" appears in the document.

// We're only testing the case where data is fetched successfully and products are displayed, 
// which is the behavior you're focusing on.

// Mock the useGetProductsQuery hook to simulate the API response
jest.mock('../slices/productsApiSlice', () => ({
  useGetProductsQuery: jest.fn(),
}));

test('renders products when data is fetched successfully', async () => {
  // Simulate successful state with mock data: products array with one product
  useGetProductsQuery.mockReturnValue({
    data: { products: [{ _id: '1', name: 'Product 1' }] },
    isLoading: false,
    error: null,
  });

  render(
    <Provider store={store}>
      <MemoryRouter>
        <HomeScreen />
      </MemoryRouter>
    </Provider>
  );

  // Assert that the product is rendered on the screen
  expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
});
