import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import Radium from 'radium';

import DeleteButton from './delete_button';

import store from '../store';


class Note extends React.Component {

    static propTypes = {
        index: PropTypes.number,
    };

    static styles = {
        note: {
            base: {
                position: 'relative',
                margin: '10px',
            },
        },
        teaxtarea: {
            base: {
                padding: '5%',
                width: '90%',
                height: '90%',
                fontFamily: 'Pacifico, cursive',
                color: '#669',
                cursor: 'pointer',
                backgroundColor: '#ff9',
                borderRadius: '2px',
                overflow: 'hidden',
                boxShadow: '0 0 5px 0 rgba(0,0,0, 0.2)',
            },
        },
        deleteButton: {
            base: {
                position: 'absolute',
                top: '5%',
                right: '5%',
            },
            hidden: {
                visibility: 'hidden',
            },
        },
    };

    constructor(props) {
        super(props);
        this.textareaRef = React.createRef();
        this.state = {
            deleteButtonVisible: false,
        };
    }

    componentDidMount() {
        this.textareaRef.current.focus();
    }

    _textChange() {
        store.notes[this.props.index].text = this.textareaRef.current.value;
    }

    _keyUp(event) {
        if (event.ctrlKey && (event.key.toLowerCase() === 'enter')) {
            store.notes[this.props.index].readOnly = true;
            this._pushNote();
            this.textareaRef.current.blur();
        }
    }

    _pushNote() {
        // TODO:
        console.log('to server...');
    }

    _deleteNote() {
        // TODO:
        console.log('to server...');
    }

    _deleteButtonClick() {
        let index = this.props.index;
        store.notes = store.notes.filter((_, index0) => index0 !== index);
        store.helperBar.hideHelp();
        this._deleteNote();
    }

    _noteMouseEnter() {
        this.setState(() => ({
            deleteButtonVisible: true,
        }));
    }

    _noteMouseLeave() {
        this.setState(() => ({
            deleteButtonVisible: false,
        }));
    }

    render() {
        let {text, readOnly} = store.notes[this.props.index];
        let deleteButtonStyle = [Note.styles.deleteButton.base, Note.styles.deleteButton.hidden];
        if (this.state.deleteButtonVisible) {
            deleteButtonStyle = Note.styles.deleteButton.base;
        }
        return (
            <li
                onMouseEnter={this._noteMouseEnter.bind(this)}
                onMouseLeave={this._noteMouseLeave.bind(this)}
                style={Note.styles.note.base}
            >
                <textarea
                    style={Note.styles.teaxtarea.base}
                    ref={this.textareaRef}
                    onChange={this._textChange.bind(this)}
                    onKeyUp={this._keyUp.bind(this)}
                    value={text}
                    readOnly={readOnly}
                />
                <div style={deleteButtonStyle}>
                    <DeleteButton
                        onClick={this._deleteButtonClick.bind(this)}
                        onMouseEnter={() => store.helperBar.showHelp('DELETE_NOTE')}
                        onMouseLeave={() => store.helperBar.hideHelp()}
                    />
                </div>
            </li>
        );
    }

}

export default view(Radium(Note));
