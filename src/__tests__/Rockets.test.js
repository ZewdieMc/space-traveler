import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
// We're using our own custom render function and not RTL's render.
import renderWithProviders from '../utils/test-utils';
import Rockets from '../components/Rockets';
import server from '../mocks/server';

beforeAll(() => {
  // Enable the mocking in tests.
  server.listen();
});

afterEach(() => {
  // Reset any runtime handlers tests may use.
  server.resetHandlers();
});

afterAll(() => {
  // Clean up once the tests are done.
  server.close();
});

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
