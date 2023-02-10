import { valueProps } from './ValueProps';
export default interface BoardProps {
    xIsNext: boolean;
    squares: valueProps[];
    onPlay: (nextString: valueProps[]) => void;
}
