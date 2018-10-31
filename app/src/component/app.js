import React from 'react';
import Radium from 'radium';

import NoteList from './note_list';
import HelperBar from './helper_bar';

import store from '../store';


class App extends React.Component {

  static styles = {
    app: {
      height: '100%',
    },
  };

  constructor(props) {
    super(props);
    this.noteList = React.createRef();
  }

  _createNote() {
    store.notes.push({
      text: '',
      readOnly: false,
    });
  }

  render() {
    return (
      <div style={App.styles.app}>
        <NoteList
          ref={this.noteList}
        />
        <HelperBar
          onClickCreateButton={this._createNote.bind(this)}
        />
      </div>
    );
  }

}

export default Radium(App);
