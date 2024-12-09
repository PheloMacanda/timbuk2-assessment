import { FC } from "react";
import { MdOutlineWaves, MdStarOutline } from "react-icons/md";
import "./card.css";

type Props = {
    cardText: string;
}

export const Card: FC<Props> = ({
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
            <p>Timbuk2 * 5 days ago</p>
            <p>{cardText}</p>
            <div>
                <button>Download</button>
                <button>View</button>
            </div>
        </div>
    );
};