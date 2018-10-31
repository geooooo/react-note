import React from 'react';
import { view } from 'react-easy-state';
import Radium from 'radium';

import Note from './note';

import store from '../store';


class NoteList extends React.Component {

    static styles = {
        noteList: {
            base: {
                display: 'flex',
                justifyContent: 'flex-start',
                alignContent: 'flex-start',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                listStyleType: 'none',
                overflow: 'hidden',
            },
        },
    };

    constructor(props) {
        super(props);
        this._pullNotes();
    }

    _pullNotes() {
        // TODO:
        console.log('to server...');
    }

    render() {
        return (
            <ul style={NoteList.styles.noteList.base}>
            {
                store.notes.map((_, index) =>
                    <Note
                        index={index}
                        key={index}
                    />
                )
            }
            </ul>
        );
    }

}

export default view(Radium(NoteList));
