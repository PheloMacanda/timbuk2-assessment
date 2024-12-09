import { FC, useState } from "react";
import { MdOutlineWaves, MdStarOutline, MdStar } from "react-icons/md";
import "./card.css";
import { Button } from "../button";

type Props = {
    cardName: string;
    cardText: string;
    cardDate: string;
    isStarActive: boolean;
}

export const Card: FC<Props> = ({
    cardDate,
    cardName,
    cardText,
    isStarActive
}) => {

    const [starActive, setStarActive] = useState<boolean>(isStarActive);

    const toggleStar = () => {
        setStarActive(!starActive);
    };

    return (
        <div className="card">
            <div className="icons-container">
                <div className="wave-container">
                    <MdOutlineWaves size={24} className="wave" />
                </div>
                <div className="star-container" onClick={toggleStar}>
                    {starActive ?
                        <MdStarOutline size={24} className="star" /> :
                        <MdStar size={24} className="star" />
                    }
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