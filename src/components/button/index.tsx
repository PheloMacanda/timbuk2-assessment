import { FC } from 'react';
import './button.css';

type Props = {
    buttonText: string;
}

export const Button:FC<Props> = ({
    buttonText
}) => {
    return (
        <button>{buttonText}</button>
    );
};