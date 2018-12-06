import React from 'react';
import classes from './Pista.css'
import ReactCountdownClock from 'react-countdown-clock'
import back from '../assets/back.png'
import forward from '../assets/forward.png'

const pistaUno = (props) => {
    var timer = null
    var controles = null
    var upload = null
    var mensaje = props.pista
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
    if(props.completada){
        mensaje = "Eta pista ya fue completada. Contuenua a la siguiente pista"
    }
    if (props.controls && props.completada !== true) {
        controles = (
            <div className={classes.buttons}>
                <button onClick={props.back} style={{ marginRight: '15px', backgroundColor:'#ffffff', border:'none'}}><img src={back} alt="Back" className={classes.img} /></button>
                <button onClick={props.forward} style={{ marginLeft: '15px', backgroundColor:'#ffffff', border:'none' }}><img src={forward} alt="Back" className={classes.img} /></button>
            </div>
        )
    }
    if (props.uploadImg){
        upload = (
            <button onClick={() => this.fileInput.click()} style={{margin:"15px"}}>Pick File</button>
        )
    }
    return (
        <div className={classes.Pista}>
            <h3>Pista {props.numPista + 1}</h3>
            <p className={classes.info}>{mensaje}</p>
            {timer}
            <input style={{ display: 'none' }} type="file" onChange={props.file} ref={fileInput => this.fileInput = fileInput} />
            {upload}
            {controles}

        </div>
    )
};

export default pistaUno;