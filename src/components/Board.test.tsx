import Board from './Board';
import setup from '../userEvent';
import { getAllByRole, getRoles, screen } from '@testing-library/dom';

describe('Name of the group', () => {
    it('should have O as next player after X ', () => {
        setup(
            <Board
                //xIsNext is false の場合
                xIsNext={false}
                squares={[]}
                onPlay={([]) => {}}
            />
        );
        const nextPlayer = screen.getByText('Next player: O');

        expect(nextPlayer).toBeInTheDocument();
    });
    it('should have X as next player after O', () => {
        setup(
            <Board
                //xIsNext is true の場合
                xIsNext={true}
                squares={[]}
                onPlay={([]) => {}}
            />
        );
        const nextPlayer = screen.getByText('Next player: X');

        expect(nextPlayer).toBeInTheDocument();
    });
    it('should show X as status winner', () => {
        setup(
            <Board
                xIsNext={true}
                // X is winner lines
                squares={['X', 'O', 'O', 'X', 'O', 'X', 'X']}
                onPlay={([]) => {}}
            />
        );
        const nextPlayer = screen.getByText('Winner X');

        expect(nextPlayer).toBeInTheDocument();
    });
    it('should show O as status winner', () => {
        setup(
            <Board
                xIsNext={true}
                // O is winner lines
                squares={['O', 'X', 'X', 'O', 'X', 'O', 'O']}
                onPlay={([]) => {}}
            />
        );
        const nextPlayer = screen.getByText('Winner O');

        expect(nextPlayer).toBeInTheDocument();
    });
    it('should show all squares ', () => {
        setup(
            <Board
                xIsNext={true}
                squares={[]}
                onPlay={([]) => {}}
            />
        );
        const squares = screen.getAllByRole('button');

        expect(squares).toHaveLength(9);
    });
    it('should call function on click', async () => {
        const mockFunction = jest.fn();
        const { user } = setup(
            <Board
                xIsNext={true}
                squares={[]}
                onPlay={([]) => {
                    mockFunction();
                }}
            />
        );
        const squares = screen.getAllByRole('button');
        await user.click(squares[0]);

        expect(mockFunction).toHaveBeenCalledTimes(1)
    });
});
