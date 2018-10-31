import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';

import CreateButton from './create_button';
import HelpText from './help_text';

import store from '../store';


class HelperBar extends React.Component {

    static propTypes = {
        onClickCreateButton: PropTypes.func,
    };

    static styles = {
        helperBar: {
            base: {
                position: 'fixed',
                left: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
            },
            visible: {
                backgroundColor: 'rgba(0,0,0, 0.1)',
            },
        },
    };

    _createButtonClick() {
        store.helperBar.showHelp('EDIT_NOTE');
        this.props.onClickCreateButton();
    }

    render() {
        let helperBarStyle = [HelperBar.styles.helperBar.base];
        if (store.helperBar.visible) {
            helperBarStyle.push(HelperBar.styles.helperBar.visible);
        }
        return (
            <section style={helperBarStyle}>
                <HelpText text={store.helperBar.text}/>
                <CreateButton
                    onClick={this._createButtonClick.bind(this)}
                    onMouseEnter={() => store.helperBar.showHelp('CREATE_NOTE')}
                    onMouseLeave={() => store.helperBar.hideHelp()}
                />
            </section>
        );
    }

}

export default view(Radium(HelperBar));
