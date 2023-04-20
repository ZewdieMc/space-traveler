import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/react';
// We're using our own custom render function and not RTL's render.
import { Provider } from 'react-redux';
import renderWithProviders from '../utils/test-utils';
import Missions from '../components/Missions';
import setupStore from '../redux/store';
import server from '../mocks/server';

describe('Missions snapshot', () => {
  test('should render missions data correctly', () => {
    renderWithProviders(
      <Provider store={setupStore({})}>
        <Missions />
      </Provider>,
    );
    const rockets = document.querySelector('.table-wrapper');
    expect(rockets).toMatchSnapshot();
  });
});

beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' })); // Enable the mocking in tests.
afterEach(() => server.resetHandlers()); // Reset any runtime handlers tests may use.
afterAll(() => server.close()); // Clean up once the tests are done.

describe('Test missions before fetching API', () => {
  test('Test for Loading... state', () => {
    renderWithProviders(<Missions />);
    expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Join Mission/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Thaicom/i)).not.toBeInTheDocument();
  });
});

describe('Test missions after fetching API', () => {0
  test('Test if missions are rendered after fetching', async () => {
    renderWithProviders(<Missions />);
    expect(await screen.findAllByText(/Join Mission/i)).toHaveLength(10);
    expect(await screen.findAllByText(/Not A Member/i)).toHaveLength(10);
    expect(await screen.findAllByText(/Thaicom/i)).toHaveLength(2);
    expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
  });
});
