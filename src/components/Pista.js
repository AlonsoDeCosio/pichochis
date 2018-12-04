import React from 'react';
import classes from './Pista.css'
import ReactCountdownClock from 'react-countdown-clock'

const pistaUno = (props) => {
    let timer = null
    if (props.tiempo > 0) {
        timer = (
            <span className={classes.otro}>
                <ReactCountdownClock seconds={props.tiempo}
                    color="#4990E2"
                    alpha={0.9}
                    size={300}
                    onComplete={props.myCallback}
                    paused={false}
                    showMilliseconds={false} />
            </span>
        )
    }
    return (
        <div className={classes.Pista}>
            <p className={classes.info}>{props.pista}</p>
            {timer}
            <input style={{display:'none'}} type="file" onChange={props.file} ref={fileInput => this.fileInput = fileInput}/>
            <button onClick={() => this.fileInput.click()}>Pick File</button>
            <button onClick={props.upload}>Upload!</button>
        </div>
    )
};

export default pistaUno;