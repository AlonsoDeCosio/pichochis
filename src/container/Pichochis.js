import React, { Component } from 'react'
import classes from './Pichochis.css'
import Pista from '../components/Pista'
import Modal from '../components/UI/Modal/Modal';


class Pichochis extends Component {

    state = {
        showError: true,
        pistas: ['/uno', '/dos', '/tres', '/cuatro', '/cinco'],
        pistasCompletas: [true, false, false, false, false],
        MensajePista: ['Este es el primer mensaje',
            'Aqui voy a poner la segunda pista',
            'Luego tengo que poner la tercer',
            'Ahora vamos a poner la cuarta',
            'Por ultimo, ponemos la quinata',
            'Este juego fue diseñado para Anette, pero lamentablemente aún no es hora de iniciar. Regresa el despues para que puedas comenzar a jugar.'],
    }
    timerEnded = () => {
        console.log('Se termino')
        this.setState({ showError: true });
    }
    cancelHandler = () => {
        this.setState({ showError: false });
        let i = 0;
        for (let pista in this.state.pistasCompletas) {
            if (this.state.pistasCompletas[pista] === true) {
                i += 1
            }
        }
        this.props.history.push(this.state.pistas[i])
        this.setState({ showError: true });
    }
    fileChangedHandler = (event) => {
        // const file = event.target.files[0]
        console.log(event.target.files[0])
    }
    render() {
        let error = null
        const pathIndex = this.state.pistas.indexOf(this.props.match.path)
        const horaActual = new Date()
        const horaInicio = new Date(1543692240000)
        // const horaInicio = new Date(1544299200000) esta va a ser la hora final para ese dia
        const dif = horaInicio.getTime() - horaActual.getTime();
        const secRestantes = dif / 1000;
        console.log(horaInicio)
        if (pathIndex !== 0 && this.state.pistasCompletas[pathIndex] === false && this.state.pistasCompletas[pathIndex - 1] !== true) {
            error = (
                <Modal show={this.state.showError} modalClosed={this.cancelHandler}>
                    Antes de que puedas contienuar, tienes que completar los retos de las pistas previas
                </Modal>
            )
        }
        return (
            <div className={classes.main}>
                {error}
                <Pista
                    pista={secRestantes > 0 ? this.state.MensajePista[this.state.MensajePista.length - 1] : this.state.MensajePista[pathIndex]}
                    tiempo={secRestantes}
                    myCallback={this.timerEnded}
                    file={this.fileChangedHandler}
                />
            </div>
        )
    }
}


export default Pichochis;