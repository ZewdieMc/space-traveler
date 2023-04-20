import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import setupStore from '../redux/store';
import Profile from '../components/Profile';

describe('Profile snapshot', () => {
  test('should render Profile page correctly', () => {
    render(
      <Provider store={setupStore({})}>
        <Profile />
      </Provider>,
    );
    const profile = document.querySelector('.profile-wrapper');
    expect(profile).toMatchSnapshot();
  });
});
