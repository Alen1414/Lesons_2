import React from 'react';

import './Caunter.css';
import Controls from './Controis';

class Counter extends React.Component{
    static defaultProps = {
        initialValue: 0,
    };

    state = {
        value: this.props.initialValue,
    };
    
    handleIncrement = () => {
        this.setState(prevState=> {
            return {
                value: prevState.value + 1,
            };
            
        })
    }
        
    
    handleDecrement = () => {
        this.setState(prevState=> {
            return {
                value: prevState.value - 1,
            };
            
        })
    }
    render() {
        return (
            <div className="Counter">
                <span className="Counter__value">{this.state.value}</span>
                <Controls
                    onDecrement={this.handleDecrement}
                    onIncrement={ this.handleIncrement}/>
            </div>)
        
    }
}

   
      
export default Counter;