import { getByRole, logRoles, render, screen } from '@testing-library/react';
import Square from './Square';
import setup from '../userEvent';

describe('Square component', () => {
    it('should call function onClick', async () => {
        const mockFunction = jest.fn();
        const { user } = setup(
            <Square
                value='O'
                onSquareClick={() => {
                    mockFunction();
                }}
            />
        );

        const button = screen.getByRole('button');
        await user.click(button);

        expect(mockFunction).toHaveBeenCalledTimes(1);
    });
    it('should show the passed value on button', () => {
        const { user } = setup(
            <Square
                value='X'
                onSquareClick={() => {}}
            />
        );
        const button = screen.getByRole('button');

        expect(button).toHaveTextContent('X');
    });
    it('should show the passed value on button', () => {
        const { user } = setup(
            <Square
                value='O'
                onSquareClick={() => {}}
            />
        );
        const button = screen.getByRole('button');

        expect(button).toHaveTextContent('O');
    });
    
});
