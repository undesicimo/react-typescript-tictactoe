import { screen } from '@testing-library/react';
import Game from './Game';
import setup from '../userEvent';

describe('Game component', () => {
    it('should have history on clicks', async () => {
        const { user } = setup(<Game />);
        const squares = screen.getAllByRole('button');

        await user.click(squares[0]);
        await user.click(squares[1]);
        await user.click(squares[2]);

        // get all button with Go to move #~
        const gameHistory = screen.getAllByText(/Go to move */);

        expect(gameHistory).toHaveLength(3);
    });

    it('should go to first history move on click', async () => {
        const { user } = setup(<Game />);
        const squares = screen.getAllByRole('button');

        await user.click(squares[0]);
        await user.click(squares[1]);
        await user.click(squares[2]);

        const gameStartHistory = screen.getByText('Go to move #1');
        await user.click(gameStartHistory);

        expect(squares[0]).toHaveTextContent('X');
    });
});
