import { useState } from "react";
import { Card } from "../../components/card";
import { SideNavBar } from "../../components/sidebar";
import Skeleton from "react-loading-skeleton";
import { SkeletonCard } from "../../components/skeletons/skeleton-card";
import "./home.css";

export const Home = () => {

    const [showSkeletons, setShowSkeletons] = useState<boolean>(false);

    const toggleSkeletons = () => setShowSkeletons(!showSkeletons);

    return (
        <div className="main-container">
            <SideNavBar />
            <div className="main-app">
                {!showSkeletons ?
                    <div className="header-texts">
                        <p>Your items</p>
                        <p>Show all</p>
                    </div> :
                    <div>
                        <Skeleton className="header-skeleton" />
                        <div className="circle-headers">
                            <Skeleton className="circle-header-skeleton" />
                            <Skeleton className="circle-header-skeleton" />
                        </div>
                    </div>
                }
                {!showSkeletons ?
                    <div className="cards">
                        <Card
                            cardName="Timbuk2"
                            cardText="Item 1"
                            cardDate="5 days ago"
                            isStarActive
                        />
                        <Card
                            cardName="Timbuk2"
                            cardText="Item 1"
                            cardDate="5 days ago"
                            isStarActive={false}
                        />
                        <Card
                            cardName="Timbuk2"
                            cardText="Item 1"
                            cardDate="5 days ago"
                            isStarActive={false}
                        />
                        <Card
                            cardName="Timbuk2"
                            cardText="Item 1"
                            cardDate="5 days ago"
                            isStarActive={false}
                        />
                        <Card
                            cardName="Timbuk2"
                            cardText="Item 1"
                            cardDate="5 days ago"
                            isStarActive
                        />
                        <Card
                            cardName="Timbuk2"
                            cardText="Item 1"
                            cardDate="5 days ago"
                            isStarActive
                        />
                    </div> :
                    <div className="cards">
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                    </div>
                }
            </div>
        </div>
    )
}