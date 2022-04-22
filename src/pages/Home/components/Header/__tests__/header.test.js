import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '../index';

describe('Header Component', () => {
    it('should render a title', () => {
        const { getByText } = render(<Header />);

        const title = getByText('Reset User Context');

        expect(title).toBeInTheDocument();
    });
});
