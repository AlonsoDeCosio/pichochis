import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/uno' >Pista 1</ NavigationItem>
        <NavigationItem link='/dos' >Pista 2 </ NavigationItem>
        <NavigationItem link='/tres' >Pista 3 </ NavigationItem>
        <NavigationItem link='/cuatro' >Pista 4 </ NavigationItem>
        <NavigationItem link='/cinco' >Pista 5 </ NavigationItem>
    </ ul>
);

export default navigationItems;