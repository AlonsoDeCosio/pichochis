import React, { Component } from 'react'
import Aux from '../../hoc/HocAux'
import Menu from "../Menu/Menu"
import SideDrawer from '../Menu/SideDrawer/SideDrawer'
import { withRouter } from 'react-router-dom'; //lo usamo para saber los cambios en el path


class Layout extends Component {

    state = {
        showSideDrawer: false
    }
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            // console.log('Route change!');
            this.setState({ showSideDrawer: false });
        }
    }

    sideDraweCloseHandler = () => {
        this.setState({ showSideDrawer: false });
    }
    sideDraweToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render() {
        return (
            <Aux>
                <Menu drawerToggleClicked={this.sideDraweToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDraweCloseHandler} />
                <main>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
};

export default withRouter(props => <Layout {...props} />);
// export default Layout;