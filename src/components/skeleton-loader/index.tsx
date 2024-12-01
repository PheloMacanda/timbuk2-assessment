import { FC } from 'react';
import './skeleton-loader.css';

type Props = {
    loaderText?: string;
}

export const Button:FC<Props> = ({
    loaderText
}) => {
    return (
        <div>{loaderText}</div>
    );
};