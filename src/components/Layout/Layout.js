import React, {Component} from 'react'
import Aux from '../../hoc/HocAux'
import Menu from "../Menu/Menu"
import SideDrawer from '../Menu/SideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDraweCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }
    sideDraweToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {
        return (
            <Aux>
                <Menu drawerToggleClicked={this.sideDraweToggleHandler}/>
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

export default Layout;