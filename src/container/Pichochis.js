import React, { Component } from 'react'
import classes from './Pichochis.css'
import Pista from '../components/Pista'
import Modal from '../components/UI/Modal/Modal';
import axios from 'axios'
import { withRouter } from 'react-router-dom';


class Pichochis extends Component {

    state = {
        showError: true,
        pistas: ['/uno', '/dos', '/tres', '/cuatro', '/cinco'],
        pistasCompletas: [true, false, false, false, false],
        MensajePista: [[{mensaje:'Este es el primer mensaje', image: false}, {mensaje:'aqui vamos a poner otra cosa', image:false}],
        [{mensaje:'Aqui voy a poner la segunda pista', image: false}, {mensaje:'esto es lo segundo', image: false}, {mensaje:'tres', image: false}],
        [{mensaje:'Luego tengo que poner la tercer', image: false}],
        [{mensaje:'Ahora vamos a poner la cuarta', image: false}],
        [{mensaje:'Por ultimo, ponemos la quinata', image: false}],
        [{mensaje:'Este juego fue diseñado para Anette, pero lamentablemente aún no es hora de iniciar. Regresa el despues para que puedas comenzar a jugar.', image: false}]],
        MensajeActual: 0,
        controls: true,
    }
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            console.log('Route change!');
            this.setState({ MensajeActual: 0 })
        }
    }
    timerEnded = () => {
        console.log('Se termino')
        this.setState({ showError: true });
    }
    backHandler = () => {
        console.log("estoy en back")
        const pathIndex = this.state.pistas.indexOf(this.props.match.path)
        if (this.state.MensajeActual > 0) {
            this.setState({ MensajeActual: this.state.MensajeActual - 1 })
        }
        if(this.state.MensajeActual === 0 && pathIndex !== 0) {
            this.props.history.push(this.state.pistas[pathIndex - 1])
        }
    }
    forwardHandler = () => {
        console.log('estoy en forward')
        const pathIndex = this.state.pistas.indexOf(this.props.match.path)
        if (this.state.MensajeActual < this.state.MensajePista[pathIndex].length - 1) {
            this.setState({ MensajeActual: this.state.MensajeActual + 1 })
        }
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
        const file = event.target.files[0]
        const pathIndex = this.state.pistas.indexOf(this.props.match.path)
        const formData = new FormData()
        console.log(file)
        formData.append('image', file, pathIndex)
        axios.post('https://us-central1-pichochis-cd292.cloudfunctions.net/uploadFile', formData, {
            onUploadProgress: progressEvent => {
                console.log('Upload progress: ' + Math.round((progressEvent.loaded / progressEvent.total) * 100) + '%')
            }
        }).then(res => {
            console.log(res)
        })
    }
    render() {
        let error = null
        const pathIndex = this.state.pistas.indexOf(this.props.match.path)
        const horaActual = new Date()
        const horaInicio = new Date(1543692240000)
        // const horaInicio = new Date(1544299200000) esta va a ser la hora final para ese dia
        const dif = horaInicio.getTime() - horaActual.getTime();
        const secRestantes = dif / 1000;
        // console.log(horaInicio)
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
                    pista={secRestantes > 0 ? this.state.MensajePista[this.state.MensajePista.length - 1][0].mensaje : this.state.MensajePista[pathIndex][this.state.MensajeActual].mensaje}
                    tiempo={secRestantes}
                    myCallback={this.timerEnded}
                    file={this.fileChangedHandler}
                    upload={this.uploadHandler}
                    controls={this.state.controls}
                    uploadImg={this.state.MensajePista[pathIndex][this.state.MensajeActual].image}
                    back={this.backHandler}
                    forward={this.forwardHandler}
                    completada={this.state.pistasCompletas[pathIndex]}
                    numPista={pathIndex}
                />
            </div>
        )
    }
}

export default withRouter(props => <Pichochis {...props} />);
// export default Pichochis;