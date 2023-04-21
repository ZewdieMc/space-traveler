import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderWithProviders from '../utils/test-utils';
import Dragons from '../components/Dragons';
import setupStore from '../redux/store';
import server from '../mocks/server';

describe('Dragon snapshot', () => {
  test('should render heading correctly', () => {
    renderWithProviders(
      <Provider store={setupStore({})}>
        <Dragons />
      </Provider>,
    );
    const dragons = document.querySelector('.dragon-list');
    expect(dragons).toMatchSnapshot();
  });
});

beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' })); // Enable the mocking in tests.
afterEach(() => server.resetHandlers()); // Reset any runtime handlers tests may use.
afterAll(() => server.close()); // Clean up once the tests are done.

describe('Test dragons before fetching API', () => {
  test('Test for Loading... state', () => {
    renderWithProviders(<Dragons />);
    expect(screen.queryByText(/Loading.../i)).toBeInTheDocument();
    expect(screen.queryByText(/Reserve Dragon/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Dragon 1/i)).not.toBeInTheDocument();
  });
});

describe('Test dragons after fetching API', () => {
  test('Test if dragons are rendered after fetching', async () => {
    renderWithProviders(<Dragons />);
    expect(await screen.findAllByText(/Reserve Dragon/i)).toHaveLength(2);
    expect(await screen.findAllByText(/Dragon 1/i)).toHaveLength(1);
    expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
  });
});
