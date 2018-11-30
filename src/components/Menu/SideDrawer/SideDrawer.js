import React from 'react'
import classes from './SideDrawer.css'

import Logo from '../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/HocAux'

const sideDrawer = (props) => {
    let attacheClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attacheClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attacheClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </ div>
                <nav>
                    <NavigationItems />
                </ nav>
            </ div>
        </ Aux>
    );

};

export default sideDrawer;