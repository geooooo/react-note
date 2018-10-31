import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';


class HelpText extends React.Component {

    static propTypes = {
        text: PropTypes.string,
    }

    static styles = {
        helpText: {
            base: {
                marginLeft: '30px',
                width: '100%',
                fontFamily: 'Fira Mono, monospace',
                textAlign: 'center',
                color: '#39f',
                textShadow: '0 0 5px rgba(0,0,0, 0.2)',
                userSelect: 'none',
            },
        },
    };

    render() {
        return (
            <div style={HelpText.styles.helpText.base}>
                {this.props.text}
            </div>
        );
    }

}

export default Radium(HelpText);
