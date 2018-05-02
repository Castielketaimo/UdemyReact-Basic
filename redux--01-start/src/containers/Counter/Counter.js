import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrementCounter(1)} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter(1)}  />
                <CounterControl label="Add 5" clicked={() => this.props.onIncrementCounter(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onDecrementCounter(5)}  />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: (factor) => dispatch({type: 'INCREMENT', value: factor}),
        onDecrementCounter: (factor) => dispatch({ type: 'DECREMENT', value: factor }),
    };
};
//connect return a function which takes in the counter
export default connect(mapStateToProps, mapDispatchToProps)(Counter);