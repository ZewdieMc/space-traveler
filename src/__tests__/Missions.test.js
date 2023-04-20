import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
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
    const missions = document.querySelector('.table-wrapper');
    expect(missions).toMatchSnapshot();
  });
});

beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Test missions before fetching API', () => {
  test('Test for Loading... state', () => {
    renderWithProviders(<Missions />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    expect(screen.queryByText(/Join Mission/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Thaicom/i)).not.toBeInTheDocument();
  });
});

describe('Test rockets after fetching API', () => {
  test('Test if rockets are rendered after fetching', async () => {
    renderWithProviders(<Missions />);
    expect(await screen.findAllByText(/Join Mission/i)).toHaveLength(10);
    expect(await screen.findAllByText(/Not A Member/i)).toHaveLength(10);
    expect(await screen.findAllByText(/Thaicom/i)).toHaveLength(2);
    expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
  });
});
