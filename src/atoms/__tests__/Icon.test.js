import React from 'react';
import Icon from '../Icon';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Atoms - Icon Test', () => {
  const mIn = jest.fn();
  const mOut = jest.fn();

  it('matches the snapshot', () => {
    const { asFragment } = render(
      <Icon type='foo' ariaLabel='a' onMouseEnter={mIn} onMouseLeave={mOut} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders icon text', () => {
    const { getByTestId } = render(
      <Icon type='foo' ariaLabel='a' onMouseEnter={mIn} onMouseLeave={mOut} />
    );

    expect(getByTestId('icon')).toHaveTextContent(/^foo$/);
  });
  it('renders icon aria-label', () => {
    const { getByRole } = render(
      <Icon type='foo' ariaLabel='a' onMouseEnter={mIn} onMouseLeave={mOut} />
    );

    expect(getByRole('img', { name: 'a' })).toBeDefined();
  });
  it('reacts to mouseEnter events', () => {
    const { getByTestId } = render(
      <Icon type='foo' ariaLabel='a' onMouseEnter={mIn} onMouseLeave={mOut} />
    );
    const icon = getByTestId('icon');

    userEvent.hover(icon);
    expect(mIn).toHaveBeenCalledTimes(1);
  });
  it('reacts to mouseLeave events', () => {
    const { getByTestId } = render(
      <Icon type='foo' ariaLabel='a' onMouseEnter={mIn} onMouseLeave={mOut} />
    );
    const icon = getByTestId('icon');

    userEvent.unhover(icon);
    expect(mOut).toHaveBeenCalledTimes(1);
  });
});
