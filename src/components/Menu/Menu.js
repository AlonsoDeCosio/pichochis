import React from 'react'
import classes from './Menu.css'
import Logo from './Logo/Logo'
import NavigationItems from './NavigationItems/NavigationItems'
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle'

const menu = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.Logo}>
            <Logo height="80%" />
        </ div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </ nav>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
    </header>
);

export default menu;