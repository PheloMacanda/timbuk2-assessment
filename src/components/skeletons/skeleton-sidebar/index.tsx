import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import "./skeleton-sidebar.css";

export const SkeletonSidebar: FC = () => {
    return (
        <div className="skeleton-container">
            <div className="skeleton-avatar">
                <Skeleton circle={true} height={50} width={50} />
                <div className="skeleton-avatar-text">
                    <Skeleton height={10} width={`100%`} />
                </div>
            </div>

            <Skeleton className="skeleton-line" height={40} width={`100%`} />

            <div className="skeleton-circle-line-container">
                <div className="skeleton-avatar">
                    <Skeleton circle={true} height={25} width={25} />
                    <div className="skeleton-avatar-text">
                        <Skeleton className="skeleton-circle-line" height={10} width={`100%`} />
                    </div>
                </div>
                <div className="skeleton-avatar">
                    <Skeleton circle={true} height={25} width={25} />
                    <div className="skeleton-avatar-text">
                        <Skeleton className="skeleton-circle-line" height={10} width={`100%`} />
                    </div>
                </div>
                <div className="skeleton-avatar">
                    <Skeleton circle={true} height={25} width={25} />
                    <div className="skeleton-avatar-text">
                        <Skeleton className="skeleton-circle-line" height={10} width={`100%`} />
                    </div>
                </div>
                <div className="skeleton-avatar">
                    <Skeleton circle={true} height={25} width={25} />
                    <div className="skeleton-avatar-text">
                        <Skeleton className="skeleton-circle-line" height={10} width={`100%`} />
                    </div>
                </div>
            </div>
            <div className="skeleton-box-section">
                <div className="skeleton-avatar">
                    <Skeleton circle={true} height={25} width={25} />
                    <div className="skeleton-avatar-text">
                        <Skeleton className="skeleton-circle-line" height={10} width={`100%`} />
                    </div>
                </div>
                <div className="skeleton-avatar">
                    <Skeleton circle={true} height={25} width={25} />
                    <div className="skeleton-avatar-text">
                        <Skeleton className="skeleton-circle-line" height={10} width={`100%`} />
                    </div>
                </div>
                <div className="skeleton-box">
                    <Skeleton height={10} width={`50%`} />
                    <Skeleton height={10} width={`100%`} />
                    <Skeleton height={10} width={`100%`} />

                    <div className="skeleton-last-box">
                        <Skeleton height={80} width={`100%`} />
                    </div>
                </div>
            </div>
        </div>
    );
};