import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import "./skeleton-card.css";

export const SkeletonCard:FC = () => {
    return (
        <div className="skeleton-card">
            <div className="skeleton-icons-container">
                <Skeleton className="wave-skeleton"/>
                <Skeleton className="star-skeleton" />
            </div>
            <div className="skeleton-middle-container">
                <Skeleton className="first-text-skeleton" />
                <Skeleton className="first-text-skeleton" />
                <Skeleton className="second-text-skeleton" />
            </div>
            <div className="skeleton-bottom-container">
                <div className="skeleton-buttons">
                    <Skeleton className="button-skeleton" />
                    <Skeleton className="button-skeleton" />
                </div>
            </div>
        </div>
    )
}