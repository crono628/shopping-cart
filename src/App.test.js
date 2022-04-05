import { render, screen } from '@testing-library/react';
import App from './App';
import Item from './components/Item';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { click } from '@testing-library/user-event/dist/click';

describe('handle item buttons', () => {
  it('registers increment button clicks', () => {
    const handleIncrement = jest.fn();
    render(<Item onClick={handleIncrement} />);
    const button = screen.getByRole('button', { name: '+' });
    userEvent.click(button);
    expect(handleIncrement).toHaveBeenCalledTimes(1);
  });
});
