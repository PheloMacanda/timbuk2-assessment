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
import { ReactComponent as HomeActive } from "../../assets/svg/active/home-active.svg";
import { ReactComponent as CellActive } from "../../assets/svg/active/cell-active.svg";
import { ReactComponent as ShopActive } from "../../assets/svg/active/shop-active.svg";
import { ReactComponent as GraphActive } from "../../assets/svg/active/graph-active.svg";
import { ReactComponent as AgentActive } from "../../assets/svg/active/agent-active.svg";
import './sidebar.css';

type Props = {

}

export const SideNavBar: FC<Props> = () => {

    const [activeMenu, setActiveMenu] = useState("Home");

    const handleMenuClick = (menu: string) => {
        setActiveMenu(menu);
    };

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
                <MenuItem
                    icon={activeMenu === "Home" ? <HomeActive /> : <Home />}
                    className="bar-menu-item"
                    active={activeMenu === "Home"}
                    onClick={() => handleMenuClick("Home")}
                >
                    Home
                </MenuItem>
                <MenuItem
                    icon={activeMenu === "Menu 1" ? <CellActive /> : <Cell />}
                    className="bar-menu-item"
                    active={activeMenu === "Menu 1"}
                    onClick={() => handleMenuClick("Menu 1")}
                >
                    Menu 1
                </MenuItem>
                <MenuItem
                    icon={activeMenu === "Menu 2" ? <ShopActive /> : <Shop />}
                    className="bar-menu-item"
                    active={activeMenu === "Menu 2"}
                    onClick={() => handleMenuClick("Menu 2")}
                >
                    Menu 2
                </MenuItem>
                <MenuItem
                    icon={activeMenu === "Menu 3" ? <GraphActive /> : <Graph />}
                    className="bar-menu-item"
                    active={activeMenu === "Menu 3"}
                    onClick={() => handleMenuClick("Menu 3")}
                >
                    Menu 3
                </MenuItem>
            </Menu>

            <Menu className='menu2'>
                <MenuItem 
                    icon={<MdOutlineSettings size={24} color={activeMenu === "Settings" ? "#6200ea" : "black"} />} 
                    className="bar-menu-item"
                    active={activeMenu === "Settings"}
                    onClick={() => handleMenuClick("Settings")}
                >
                    Settings
                </MenuItem>
                <MenuItem 
                    icon={activeMenu === "Support" ? <AgentActive /> :<Agent />} 
                    className="bar-menu-item"
                    active={activeMenu === "Support"}
                    onClick={() => handleMenuClick("Support")}
                >
                    Support
                </MenuItem>
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