import { FC, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FaSearch, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdOutlineSettings, MdClose } from "react-icons/md";
import Image2 from "../../assets/images/image2.png";
import { ReactComponent as Home } from "../../assets/svg/home.svg";
import { ReactComponent as Cell } from "../../assets/svg/cell.svg";
import { ReactComponent as Shop } from "../../assets/svg/shop.svg";
import { ReactComponent as Graph } from "../../assets/svg/graph.svg";
import { ReactComponent as Agent } from "../../assets/svg/agent.svg";
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
                <MenuItem icon={<Home />} className="bar-menu-item">Home</MenuItem>
                <MenuItem icon={<Cell />} className="bar-menu-item">Menu 1</MenuItem>
                <MenuItem icon={<Shop />} className="bar-menu-item">Menu 2</MenuItem>
                <MenuItem icon={<Graph />} className="bar-menu-item">Menu 3</MenuItem>
            </Menu>

            <Menu className='menu2'>
                <MenuItem icon={<MdOutlineSettings size={24} />} className="bar-menu-item">Settings</MenuItem>
                <MenuItem icon={<Agent />} className="bar-menu-item">Support</MenuItem>
            </Menu>

            {!collapsed && (
                <div className="feature-card-container">
                    <div className="feature-card">
                        <div className="feature-text">
                            <div className="top-header-text">
                                <strong>Feature Available now!</strong>
                                <MdClose className="md-close-icon" />
                            </div>
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