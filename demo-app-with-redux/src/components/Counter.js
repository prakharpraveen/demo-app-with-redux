import React from 'react';
import { connect } from "react-redux";
import { increaseCounter, decreaseCounter } from "../redux/action/counterAction";

function Counter(props) {
    return (
        <div>
            <div>Count: {props.count}</div>
            <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
            <button onClick={() => props.increaseCounter()}>Increase Count</button>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        count: state.counter.count,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increaseCounter: () => dispatch(increaseCounter()),
        decreaseCounter: () => dispatch(decreaseCounter()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);