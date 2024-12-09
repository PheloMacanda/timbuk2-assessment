import { Card } from '../../components/card';
import { SideNavBar } from '../../components/sidebar';
import './home.css';

export const Home = () => {
    return (
        <div className="main-container">
            <SideNavBar />
            <div className="main-app">
                <div className="header-texts">
                    <p>Your items</p>
                    <p>View all</p>
                </div>
                <div className="cards">
                    <Card
                        cardName="Timbuk2"
                        cardText="Item 1"
                        cardDate="5 days ago"
                    />
                    <Card
                        cardName="Timbuk2"
                        cardText="Item 1"
                        cardDate="5 days ago"
                    />
                    <Card
                        cardName="Timbuk2"
                        cardText="Item 1"
                        cardDate="5 days ago"
                    />
                    <Card
                        cardName="Timbuk2"
                        cardText="Item 1"
                        cardDate="5 days ago"
                    />
                    <Card
                        cardName="Timbuk2"
                        cardText="Item 1"
                        cardDate="5 days ago"
                    />
                    <Card
                        cardName="Timbuk2"
                        cardText="Item 1"
                        cardDate="5 days ago"
                    />
                </div>
            </div>
        </div>
    )
}