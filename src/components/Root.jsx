import React, { Component } from "react";
import { connect } from "react-redux";
import { ACTION_1 } from "../redux/actions/actions";

class Root extends Component {
    state = {}
    componentDidMount() {
        this.props.ACTION_1(1000);
    }
    render() {
        console.log(this.props);
        return(
            <div><h1>Hola Root</h1></div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const MapDispatchToProps = {
    ACTION_1
}
export default connect(mapStateToProps, MapDispatchToProps)(Root);