import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '.';

describe('Testing the Button', () => {
  it('should match the default snapshot', () => {
    const { container } = render(
      <Button variant="contained" color="primary" children="Add User Group" />,
    );
    expect(container).toMatchSnapshot();
  });
});