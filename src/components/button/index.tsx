import { FC } from 'react';
import './button.css';

type Props = {
    buttonText: string;
    variant: "primary" | "secondary";
}

export const Button:FC<Props> = ({
    buttonText,
    variant
}) => {
    return (
        <button className={`${variant}-btn`}>{buttonText}</button>
    );
};