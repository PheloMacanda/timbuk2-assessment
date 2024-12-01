import { FC } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import './sidebar.css';

type Props = {

}

export const SideNavBar: FC<Props> = () => {
    return (
        <Sidebar>
            <Menu>
                <MenuItem>AG AGoodCompany</MenuItem>
                <MenuItem>Search Bar</MenuItem>

                <MenuItem>Home</MenuItem>
                <MenuItem>Menu 1</MenuItem>
                <MenuItem>Menu 2</MenuItem>
                <MenuItem>Menu 3</MenuItem>
                <MenuItem>Space....Items</MenuItem>

                <MenuItem>Settings</MenuItem>
                <MenuItem>Support</MenuItem>

                <MenuItem>Last item</MenuItem>
            </Menu>
        </Sidebar>
    );
};