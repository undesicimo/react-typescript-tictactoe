import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const setup = (jsx: JSX.Element) => {
    return {
        user: userEvent.setup(),
        ...render(jsx),
    };
};

export default setup;
