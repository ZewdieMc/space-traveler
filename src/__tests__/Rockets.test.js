import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
// We're using our own custom render function and not RTL's render.
import renderWithProviders from '../utils/test-utils';
import Rockets from '../components/Rockets';
import server from '../mocks/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' })); // Enable the mocking in tests.
afterEach(() => server.resetHandlers()); // Reset any runtime handlers tests may use.
afterAll(() => server.close()); // Clean up once the tests are done.

describe('Test rockets before fetching API', () => {
  test('Test for Loading... state', () => {
    renderWithProviders(<Rockets />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    expect(screen.queryByText(/Reserve Rocket/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Falcon 1/i)).not.toBeInTheDocument();
  });
});

describe('Test rockets after fetching API', () => {
  test('Test if rockets are rendered after fetching', async () => {
    renderWithProviders(<Rockets />);
    expect(await screen.findAllByText(/Reserve Rocket/i)).toHaveLength(4);
    expect(await screen.findAllByText(/Falcon 1/i)).toHaveLength(2);
    expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
  });
});
