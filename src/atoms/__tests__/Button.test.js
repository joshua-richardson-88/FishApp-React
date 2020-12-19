import React from 'react';
import Button from '../Button';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Atoms - Button Test', () => {
  const handleClick = jest.fn();

  it('matches the snapshot', () => {
    const { asFragment } = render(<Button action={handleClick}>Hello Bees!</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders text', () => {
    const { getByTestId } = render(<Button action={handleClick}>Hello Bees!</Button>);

    expect(getByTestId('button')).toHaveTextContent(/^Hello Bees!$/);
  });
  it('correctly handles clicks', () => {
    const { getByTestId } = render(<Button action={handleClick}>Hello Bees!</Button>);
    const button = getByTestId('button');

    userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
