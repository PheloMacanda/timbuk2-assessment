import { Card } from '../../components/card';
import { SideNavBar } from '../../components/sidebar';
import './home.css';

export const Home = () => {
    return (
        <div className="main-container">
            <SideNavBar />
            <div className="main-app">
                Your items
                <div className='cards'>
                    <Card 
                        cardText='Item 1'
                    />
                </div>
            </div>
        </div>
    )
}