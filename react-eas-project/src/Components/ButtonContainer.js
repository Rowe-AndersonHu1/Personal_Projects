import React from 'react';
import ReactDOM from 'react-dom';
import "../App.css";
import PropTypes from 'prop-types'

class ButtonContainer extends React.Component {
    moveForward = (e) => {
        console.log(ReactDOM.findDOMNode(this).childNodes[0]);
        this.props.changeInfo(1)
    }

    moveBackward = (e) => {
        this.props.changeInfo(-1)
    }

    restart = (e) => {
        this.props.changeInfo(-9)
    }

    render() {
        return (
            <div className="button-container">
                <button 
                    onClick={this.moveBackward} 
                    className="change-button" 
                    id="prev">Prev</button>
                    
                <button 
                    onClick={this.moveForward} 
                    className="change-button" 
                    id="next">Next</button>
                
                <button
                    onClick={this.restart}
                    className="change-button"
                    id="restart">Restart</button>
            </div>
        );
    }
}

// PropTypes
ButtonContainer.propTypes = {
    pageCount: PropTypes.number.isRequired
}

export default ButtonContainer;