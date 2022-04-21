import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
    state = {
        visible: false,
    };
    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }));
    };
    render() {
        return (
            <div className="Dropdown">
                <button
                    type="button"
                    className="Dropdown__togle"
                    onClick={this.toggle}
                >
                    {this.state.visible ? 'Show' : 'Hide'}
                   
                </button>

                
                {this.state.visible && (
                 <div className="Dropdown__menu"> Down menu</div>
            
                )}
               </div>    
        );
    }
}
export default Dropdown;