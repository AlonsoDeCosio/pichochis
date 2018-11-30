import React from 'react';
import classes from './Pista.css'
import ReactCountdownClock from 'react-countdown-clock'

const pistaUno = (props) => {
    return (
        <div className={classes.Pista}>
            <p className={classes.info}>{props.pista}</p>
            <span className={classes.otro}>
                <ReactCountdownClock seconds={60}
                    color="#4990E2"
                    alpha={0.9}
                    size={300}
                    onComplete={this.myCallback}
                    paused={true} />
            </span>
        </div>
    )
};

export default pistaUno;