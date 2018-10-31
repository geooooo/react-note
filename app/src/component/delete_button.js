import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';


class DeleteButton extends React.Component {

    static propTypes = {
        onClick: PropTypes.func,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func,
    };

    static styles = {
        deleteButton: {
            base: {
                display: 'flex',
                alignContent: 'center',
                padding: '5px',
                textAlign: 'center',
                color: '#fff',
                backgroundColor: '#f33',
                borderRadius: '100%',
                userSelect: 'none',
                cursor: 'pointer',
                boxShadow: '0 0 5px 0 rgba(0,0,0, 0.2)',

                ':hover': {
                    backgroundColor: '#f44',
                },
            },
        },
    };

    render() {
        return (
            <button
                style={DeleteButton.styles.deleteButton.base}
                type='button'
                onClick={this.props.onClick}
                onMouseEnter={this.props.onMouseEnter}
                onMouseLeave={this.props.onMouseLeave}
            >
                <i className='material-icons'>delete</i>
            </button>
        );
    }

}

export default Radium(DeleteButton);
