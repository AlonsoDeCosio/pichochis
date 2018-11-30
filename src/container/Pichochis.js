import React, { Component } from 'react'
import classes from './Pichochis.css'
import Pista from '../components/Pista'


class Pichochis extends Component {

    state = {
        time: 0,
        isOn: false,
        start: 0
    }
    myCallback = () => {
        console.log('Se termino')
    }
    render() {
        return (
            <div className={classes.main}>
                <Pista
                    pista={"El Jueves 14 de Junio se hará la entrega de las calificaciones finales"}
                     />
            </div>
        )
    }
}


export default Pichochis;