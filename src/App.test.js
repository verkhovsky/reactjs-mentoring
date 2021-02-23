import { render } from '@testing-library/react'

import App from '../App';

describe('App', () => {
  it('should render provider', () => {
    const wrapper = render(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});
