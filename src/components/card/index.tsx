import { FC } from 'react';

type Props = {
    cardText: string;
}

export const Card:FC<Props> = ({
    cardText
}) => {
    return (
        <div>{cardText}</div>
    );
};