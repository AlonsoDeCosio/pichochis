import React from 'react'
import logo from '../../../assets/Logo.png'
import classes from './Logo.css'


const Logo = (props) => (
    <img src={logo} alt="MyBurger" className={classes.Logo}/>
);
//<img src={logo} alt="MyBurger" className={classes.Logo}/>
export default Logo;