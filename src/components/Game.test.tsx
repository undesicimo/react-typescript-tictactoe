import { render, screen } from '@testing-library/react';
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

describe('Board component', () => {
    it('should render default current move of X', () => {
        render(<Game />);

        const defaultPlayer = screen.getByText('Next player: X');

        expect(defaultPlayer).toBeInTheDocument();
    });

    it('should show next player as O on click', async () => {
        const { user } = setup(<Game />);

        const squares = screen.getAllByRole('button');
        await user.click(squares[0]);

        const nextPlayer = screen.getByText('Next player: O');
        expect(nextPlayer).toBeInTheDocument();
    });

    it('should show winner on winning condition', async () => {
        const { user } = setup(<Game />);
        const squares = screen.getAllByRole('button');

        // Winner X
        await user.click(squares[0]);
        await user.click(squares[1]);
        await user.click(squares[3]);
        await user.click(squares[2]);
        await user.click(squares[6]);

        const winnerX = screen.getByText('Winner X');
        expect(winnerX).toBeInTheDocument();
    });
});

describe('Square component', () => {
    it('should show X on button first move', async () => {
        const { user } = setup(<Game />);
        const squares = screen.getAllByRole('button');

        await user.click(squares[0]);
        await user.click(squares[0]);

        expect(squares[0]).toHaveTextContent('X');
    });

    it('should show O on button on the second move', async () => {
        const { user } = setup(<Game />);
        const squares = screen.getAllByRole('button');

        await user.click(squares[0]);
        await user.click(squares[1]);

        expect(squares[1]).toHaveTextContent('O');
    });
});
