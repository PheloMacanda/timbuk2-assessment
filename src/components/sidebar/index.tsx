import { FC, useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { FaSearch, FaHome, FaBook, FaShoppingCart, FaChartLine, FaCog, FaLifeRing, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image2 from '../../assets/images/image2.png';
import './sidebar.css';

type Props = {

}

export const SideNavBar: FC<Props> = () => {

    const [collapsed, setCollapsed] = useState(false);

    const handleToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Sidebar collapsed={collapsed} className='side' width={'35vh'}>
            {!collapsed && (
                <div className="profile">
                    <div className="names">
                        <div className="avatar">AG</div>
                        <div className="company-name">AGoodCompany</div>
                    </div>
                    <div className="toggle-btn" onClick={handleToggle}>
                        <FaChevronLeft />
                    </div>
                </div>
            )}
            {collapsed &&
                <div className="toggle-btn-collapsed" onClick={handleToggle}>
                    <FaChevronRight />
                </div>
            }
            {collapsed &&
                <div className="search-collapsed">
                    <div className="search-collapsed-container">
                        <FaSearch />
                    </div>
                </div>
            }

            {!collapsed && (
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <div className="icon">
                        <FaSearch color='gray' />
                    </div>
                </div>
            )}

            <Menu className='menu1'>
                <MenuItem icon={<FaHome />}>Home</MenuItem>
                <MenuItem icon={<FaBook />}>Menu 1</MenuItem>
                <MenuItem icon={<FaShoppingCart />}>Menu 2</MenuItem>
                <MenuItem icon={<FaChartLine />}>Menu 3</MenuItem>
            </Menu>

            <Menu className='menu2'>
                <MenuItem icon={<FaCog />}>Settings</MenuItem>
                <MenuItem icon={<FaLifeRing />}>Support</MenuItem>
            </Menu>

            {!collapsed && (
                <div className='feature-card-container'>
                    <div className="feature-card">
                        <div className="feature-text">
                            <strong>Feature Available now!</strong>
                            <p>Check out the new dashboard view. Pages now load faster.</p>
                        </div>
                        <div className="feature-image">
                            <img src={Image2} alt="Feature Preview" />
                        </div>
                    </div>
                </div>
            )}
        </Sidebar>
    );
};