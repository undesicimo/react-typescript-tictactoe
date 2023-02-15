import { valueProps, valuesProps } from './ValueProps';
export default interface BoardProps {
    xIsNext: boolean;
    squares: valuesProps;
    onPlay: (nextString: valuesProps) => void;
}
