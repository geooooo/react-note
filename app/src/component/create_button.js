import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';


class CreateButton extends React.Component {

    static propTypes = {
        onClick: PropTypes.func,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func,
    };

    static styles = {
        createButton: {
            base: {
                display: 'flex',
                alignContent: 'center',
                margin: '5px 30px',
                padding: '5px',
                textAlign: 'center',
                color: '#fff',
                backgroundColor: '#39f',
                borderRadius: '100%',
                userSelect: 'none',
                cursor: 'pointer',
                boxShadow: '0 0 5px 0 rgba(0,0,0, 0.2)',

                ':hover': {
                    backgroundColor: '#4af',
                },
            },
        },
    };

    render() {
        return (
            <button
                style={CreateButton.styles.createButton.base}
                type='button'
                onClick={this.props.onClick}
                onMouseEnter={this.props.onMouseEnter}
                onMouseLeave={this.props.onMouseLeave}
            >
                <i className='material-icons'>add</i>
            </button>
        );
    }

}

export default Radium(CreateButton);
