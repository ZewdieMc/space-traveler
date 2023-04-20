import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import setupStore from '../redux/store';

describe('NavBar snapshot', () => {
  test('should render heading correctly', () => {
    render(
      <Provider store={setupStore({})}>
        <Navbar />
      </Provider>,
    );
    const missions = document.querySelector('header');
    expect(missions).toMatchSnapshot();
  });
});
