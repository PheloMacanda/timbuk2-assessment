import { FC } from "react";
import { MdOutlineWaves, MdStarOutline } from "react-icons/md";
import "./card.css";
import { Button } from "../button";

type Props = {
    cardName: string;
    cardText: string;
    cardDate: string;
}

export const Card: FC<Props> = ({
    cardDate,
    cardName,
    cardText
}) => {
    return (
        <div className="card">
            <div className="icons-container">
                <div className="wave-container">
                    <MdOutlineWaves size={24} className="wave" />
                </div>
                <div className="star-container">
                    <MdStarOutline size={24} className="star" />
                </div>
            </div>
            <div className="middle-container">
                <p className="card-name-date">{cardName} &#8226; {cardDate}</p>
                <p className="card-text">{cardText}</p>
            </div>
            <div className="bottom-container">
                <div className="buttons">
                    <Button
                        buttonText="Download"
                        variant="secondary"
                    />
                    <Button
                        buttonText="View"
                        variant="primary"
                    />
                </div>
            </div>
        </div>
    );
};